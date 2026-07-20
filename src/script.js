import { drawMinimap } from './render/drawMinimap.js'
import { updateLoop } from './update/gameLoop.js'
import { updateKeyState } from './input/keyboard.js'

const main = () => {
  drawMinimap()
  updateLoop()

  window.addEventListener('keydown', updateKeyState)
  window.addEventListener('keyup', updateKeyState)
}

main()
