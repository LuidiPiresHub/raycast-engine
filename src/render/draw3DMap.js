import { player } from '../config/player.js'
import { world } from '../config/world.js'
import { castRays, angleStep } from '../raycast/castRays.js'
import { camera } from '../config/camera.js'

const mapCanvas = document.querySelector('.mapCanvas')
const mapCanvasCtx = mapCanvas.getContext('2d')

const { canvasSize } = world
const { rays, fovRadians, projectionPlane } = camera

mapCanvas.width = canvasSize
mapCanvas.height = canvasSize

const columnWidth = canvasSize / rays

export const draw3DMap = () => {
  mapCanvasCtx.clearRect(0, 0, canvasSize, canvasSize)

  const centerY = canvasSize / 2

  mapCanvasCtx.fillStyle = 'dodgerblue'
  mapCanvasCtx.fillRect(0, 0, canvasSize, centerY)

  mapCanvasCtx.fillStyle = 'gray'
  mapCanvasCtx.fillRect(0, centerY, canvasSize, canvasSize)

  for (let i = 0; i < rays; i++) {
    const angle = player.angle - fovRadians / 2 + i * angleStep;
    
    const { distance } = castRays(angle)
  
    const wallHeight = projectionPlane / distance
    
    const top = centerY - wallHeight / 2
    
    mapCanvasCtx.fillStyle = 'white'
    mapCanvasCtx.fillRect(Math.floor(i * columnWidth), top, Math.ceil(columnWidth), wallHeight)
  }
}
