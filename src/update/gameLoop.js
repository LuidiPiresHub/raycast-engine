import { movePlayer } from './movePlayer.js'
import { drawPlayer } from '../render/drawPlayer.js'
import { draw3DMap } from '../render/draw3DMap.js'

export const updateLoop = () => {
  movePlayer()
  drawPlayer()
  draw3DMap()
  requestAnimationFrame(updateLoop)
}
