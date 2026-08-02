import { camera } from '../config/camera.js'
import { player } from '../config/player.js'
import { world } from '../config/world.js'
import { castRay } from '../core/castRay.js'

const map3D = document.querySelector('.map3D')
const map3DCtx = map3D.getContext('2d')

const { map3DSizeY, map3DSizeX } = world

map3D.height = map3DSizeY
map3D.width = map3DSizeX


const MAX_LIGHT_DISTANCE = 30
const MIN_BRIGHTNESS = 0.5
const DISTANCE_WEIGHT = 0.7
const FACING_WEIGHT = 0.3

export const draw3DMap = () => {
  map3DCtx.clearRect(0, 0, map3DSizeX, map3DSizeY)

  const horizon = map3DSizeY / 2 + camera.pitch

  map3DCtx.fillStyle = 'dodgerblue'
  map3DCtx.fillRect(0, 0, map3DSizeX, horizon)

  map3DCtx.fillStyle = 'green'
  map3DCtx.fillRect(0, horizon, map3DSizeX, map3DSizeY - horizon)

  const startAngle = player.angle - camera.fov / 2
  const angleStep = camera.fov / (camera.map3DRays - 1)

  for (let i = 0; i < camera.map3DRays; i++) {
    const angle = startAngle + i * angleStep
    const { correctedDistance, facing } = castRay(angle)

    const wallHeight = map3DSizeY / correctedDistance
    const centerWall = horizon - wallHeight / 2
    const columnWidth = map3DSizeX / camera.map3DRays

    const x = i * columnWidth

    const distanceBrightness = Math.max(MIN_BRIGHTNESS, 1 - correctedDistance / MAX_LIGHT_DISTANCE)
    const brightness = distanceBrightness * DISTANCE_WEIGHT + facing * FACING_WEIGHT
    const color = Math.floor(255 * brightness)

    map3DCtx.fillStyle = `rgb(${color}, ${color}, ${color})`
    map3DCtx.fillRect(x, centerWall, columnWidth, wallHeight)
  }

}