import { world } from '../config/world.js'
import { player } from '../config/player.js'
import { castRays, angleStep } from '../raycast/castRays.js'
import { camera } from '../config/camera.js'

const playerCanvas = document.querySelector('.playerCanvas')
const playerCtx = playerCanvas.getContext('2d')

const { canvasSize, mapSizeY, mapSizeX, pixelX, pixelY } = world
const { rays, fovRadians } = camera

playerCanvas.width = canvasSize
playerCanvas.height = canvasSize

export const drawPlayer = () => {
  playerCtx.clearRect(0, 0, canvasSize, canvasSize)
  playerCtx.fillStyle = 'red'
  playerCtx.beginPath()
  playerCtx.arc(
    player.x * pixelX,
    player.y * pixelY,
    10,
    0,
    Math.PI * 2
  )
  playerCtx.fill()

  playerCtx.strokeStyle = 'red'
  playerCtx.lineWidth = 5

  playerCtx.beginPath()

  playerCtx.moveTo(
    player.x * pixelX,
    player.y * pixelY
  )

  playerCtx.lineTo(
    (player.x + Math.cos(player.angle)) * pixelX,
    (player.y + Math.sin(player.angle)) * pixelY
  )

  playerCtx.stroke()

  for (let i = 0; i < rays; i++) {
    const angle = player.angle - fovRadians / 2 + i * angleStep;
    const { rayX, rayY } = castRays(angle);

    playerCtx.strokeStyle = 'lime'

    playerCtx.beginPath()

    playerCtx.moveTo(
      player.x * pixelX,
      player.y * pixelY,
    )

    playerCtx.lineTo(
      rayX * pixelX,
      rayY * pixelY,
    )

    playerCtx.stroke()
  }

}
