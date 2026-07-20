import { keysMap } from '../input/keyboard.js'
import { player } from '../config/player.js'
import { map } from '../config/map.js'

export const movePlayer = () => {
  if (keysMap["a"]) player.angle -= player.turnSpeed
  if (keysMap["d"]) player.angle += player.turnSpeed

  let nextX = player.x
  let nextY = player.y

  if (keysMap['w']) {
    nextX += Math.cos(player.angle) * player.moveSpeed
    nextY += Math.sin(player.angle) * player.moveSpeed
  }
  if (keysMap['s']) {
    nextX -= Math.cos(player.angle) * player.moveSpeed
    nextY -= Math.sin(player.angle) * player.moveSpeed
  }

  if (map[Math.floor(player.y)][Math.floor(nextX)] === 0) {
    player.x = nextX;
  }

  if (map[Math.floor(nextY)][Math.floor(player.x)] === 0) {
    player.y = nextY;
  }
}
