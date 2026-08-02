import { degToRad } from '../utils/degToRad.js'
import { world } from './world.js'

export const camera = {
  fov: degToRad(80),
  walkFov: degToRad(80),
  runFov: degToRad(90),
  crouchFov: degToRad(70),

  pitch: 0,

  // eyeHeight: 1,
  // normalEyeHeight: 1,
  // crouchEyeHeight: 0.6,

  minimapRays: world.minimapSize,
  map3DRays: world.map3DSizeX,

}