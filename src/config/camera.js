import { world } from './world.js'

const fov = 60;

const fovRadians = fov * Math.PI / 180;

export const camera = {
  fov,
  fovRadians,
  rays: 500,
  projectionPlane: (world.canvasSize / 2) / Math.tan(fovRadians / 2),
}
