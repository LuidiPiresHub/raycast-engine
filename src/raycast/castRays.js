import { player } from '../config/player.js'
import { map } from '../config/map.js'
import { camera } from '../config/camera.js'

const rayStep = 0.02

const { fovRadians, rays } = camera

export const angleStep = fovRadians / rays;

export const castRays = (angle) => {
  let rayX = player.x
  let rayY = player.y

  while (true) {
    rayX += Math.cos(angle) * rayStep
    rayY += Math.sin(angle) * rayStep

    const mapY = Math.floor(rayY)
    const mapX = Math.floor(rayX)

    if (map[mapY][mapX] === 1) break
  }

  const distanceCalc = Math.hypot(
    rayX - player.x,
    rayY - player.y
  )

  const distance = distanceCalc * Math.cos(angle - player.angle);

  return { rayX, rayY, distance }
}
