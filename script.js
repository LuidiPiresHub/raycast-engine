import { camera } from './config/camera.js'
import { player } from './config/player.js'
import { world } from './config/world.js'
import { updateKeysState } from './core/keyboard.js'
import { movePlayer } from './core/movePlayer.js'
import { updateCamera } from './core/updateCamera.js'
import { draw3DMap } from './renderer/draw3DMap.js'
import { drawMinimap } from './renderer/drawMinimap.js'
import { drawPlayer } from './renderer/drawPlayer.js'

const mainTag = document.querySelector('.main')

let lastTime = 0
const loop = (currentTime) => {
  const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1)
  lastTime = currentTime

  drawPlayer()
  movePlayer(deltaTime)
  updateCamera(deltaTime)
  draw3DMap()
  requestAnimationFrame(loop)
}

const main = () => {
  drawMinimap()
  requestAnimationFrame(loop)

  mainTag.addEventListener('click', async () => {
    await mainTag.requestFullscreen()
    await mainTag.requestPointerLock()
  });

  const { map3DSizeY } = world

  document.addEventListener('mousemove', ({ movementX, movementY }) => {
    if (document.pointerLockElement === mainTag) {
      const sensitivityX = 0.002;
      const sensitivityY = 0.8;

      player.angle += movementX * sensitivityX

      const nextPitch = camera.pitch - movementY * sensitivityY;

      camera.pitch = Math.max(-map3DSizeY, Math.min(map3DSizeY, nextPitch));
    }
  });

  document.addEventListener('keydown', updateKeysState)
  document.addEventListener('keyup', updateKeysState)
}

main()