import { camera } from '../config/camera.js'
import { player } from '../config/player.js'
import { world } from '../config/world.js'
import { keysMap } from './keyboard.js'

const { map, mapSizeY } = world

export const movePlayer = (deltaTime) => {
  let nextX = player.x
  let nextY = player.y
  let speed = player.walkSpeed

  const isMoving =
    keysMap['KeyW'] ||
    keysMap['KeyS'] ||
    keysMap['KeyA'] ||
    keysMap['KeyD']

  player.moving = isMoving
  player.running = false
  player.crouching = false

  if (keysMap['ShiftLeft'] && player.moving) {
    speed = player.runSpeed
    player.running = true
  } else if (keysMap['ControlLeft'] || keysMap['KeyC']) {
    speed = player.crouchSpeed
    player.crouching = true
  }

  if (keysMap['KeyW']) {
    player.moving = true
    nextX += Math.cos(player.angle) * speed * deltaTime
    nextY += Math.sin(player.angle) * speed * deltaTime
  }

  if (keysMap['KeyS']) {
    player.moving = true
    nextX -= Math.cos(player.angle) * speed * deltaTime
    nextY -= Math.sin(player.angle) * speed * deltaTime
  }

  if (keysMap['KeyA']) {
    player.moving = true
    nextX += Math.cos(player.angle - Math.PI / 2) * speed * deltaTime
    nextY += Math.sin(player.angle - Math.PI / 2) * speed * deltaTime
  }

  if (keysMap['KeyD']) {
    player.moving = true
    nextX += Math.cos(player.angle + Math.PI / 2) * speed * deltaTime
    nextY += Math.sin(player.angle + Math.PI / 2) * speed * deltaTime
  }

  // if (keysMap['ArrowLeft']) player.angle -= player.turnSpeed * deltaTime

  // if (keysMap['ArrowRight']) player.angle += player.turnSpeed * deltaTime

  const currentX = Math.floor(player.x)
  const currentY = Math.floor(player.y)

  const nextTileX = Math.floor(nextX)
  const nextTileY = Math.floor(nextY)

  if (map[currentY * mapSizeY + nextTileX] === 0) {
    player.x = nextX
  }

  if (map[nextTileY * mapSizeY + currentX] === 0) {
    player.y = nextY
  }
}