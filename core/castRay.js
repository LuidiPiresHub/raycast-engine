import { player } from '../config/player.js'
import { world } from '../config/world.js'

const { map, mapSizeX } = world

export const castRay = (angle) => {
  let mapX = Math.floor(player.x)
  let mapY = Math.floor(player.y)

  const rayDirX = Math.cos(angle)
  const rayDirY = Math.sin(angle)

  const stepX = rayDirX < 0 ? -1 : 1
  const stepY = rayDirY < 0 ? -1 : 1

  const deltaDistX = Math.abs(1 / rayDirX)
  const deltaDistY = Math.abs(1 / rayDirY)

  let sideDistX = (stepX === 1 ? mapX + 1 - player.x : player.x - mapX) * deltaDistX
  let sideDistY = (stepY === 1 ? mapY + 1 - player.y : player.y - mapY) * deltaDistY
  let side

  while (true) {
    if (sideDistX < sideDistY) {
      sideDistX += deltaDistX
      mapX += stepX
      side = 0
    } else {
      sideDistY += deltaDistY
      mapY += stepY
      side = 1
    }

    if (map[mapY * mapSizeX + mapX] === 1) break

  }

  const distance = side === 0 ? sideDistX - deltaDistX : sideDistY - deltaDistY
  const correctedDistance = distance * Math.cos(angle - player.angle)

  const hitX = player.x + rayDirX * distance
  const hitY = player.y + rayDirY * distance

  const facing = side === 0 ? Math.abs(rayDirX) : Math.abs(rayDirY)

  return { hitX, hitY, side, facing, distance, correctedDistance }
}