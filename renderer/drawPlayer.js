import { world } from '../config/world.js'
import { player } from '../config/player.js'
import { castRay } from '../core/castRay.js'
import { camera } from '../config/camera.js'

const playerMap = document.querySelector('.playerMap')
const playerMapCtx = playerMap.getContext('2d')

const { minimapSize, mapSizeY, mapSizeX, pixelSizeY, pixelSizeX } = world

playerMap.height = minimapSize
playerMap.width = minimapSize

const playerMinimapSize = 10
const defaultArrowOptions = {
  color: 'red',
  tip: 2,
  wing: 1,
  back: 1,
  notch: 0.3,
}

export const drawArrow = (x, y, angle, size, options = defaultArrowOptions) => {
  const dirX = Math.cos(angle)
  const dirY = Math.sin(angle)

  const perpX = -dirY
  const perpY = dirX

  playerMapCtx.fillStyle = options.color

  playerMapCtx.beginPath()

  playerMapCtx.moveTo(
    x + dirX * size * options.tip,
    y + dirY * size * options.tip,
  )

  playerMapCtx.lineTo(
    x - dirX * size * options.back + perpX * size * options.wing,
    y - dirY * size * options.back + perpY * size * options.wing,
  )

  playerMapCtx.lineTo(
    x - dirX * size * options.notch,
    y - dirY * size * options.notch,
  )

  playerMapCtx.lineTo(
    x - dirX * size * options.back - perpX * size * options.wing,
    y - dirY * size * options.back - perpY * size * options.wing,
  )

  playerMapCtx.closePath()
  playerMapCtx.fill()
}

const drawRays = () => {
  const startAngle = player.angle - camera.fov / 2
  const angleStep = camera.fov / (camera.minimapRays - 1)

  playerMapCtx.lineWidth = 5

  for (let i = 0; i < camera.minimapRays; i++) {
    const angle = startAngle + i * angleStep
    const { hitX, hitY } = castRay(angle)

    playerMapCtx.strokeStyle = 'lime'

    playerMapCtx.beginPath()

    playerMapCtx.moveTo(
      player.x * pixelSizeX,
      player.y * pixelSizeY,
    )

    playerMapCtx.lineTo(
      hitX * pixelSizeX,
      hitY * pixelSizeY,
    )

    playerMapCtx.stroke()
  }
}

export const drawPlayer = () => {
  playerMapCtx.clearRect(0, 0, minimapSize, minimapSize)

  drawRays()

  drawArrow(
    player.x * pixelSizeX,
    player.y * pixelSizeY,
    player.angle,
    Math.min(pixelSizeX, pixelSizeY) * 0.8,
  )
}
