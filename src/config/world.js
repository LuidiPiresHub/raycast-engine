import { map } from './map.js'

const canvasSize = 1024;
const mapSizeY = map.length;
const mapSizeX = map[0].length;

export const world = {
  canvasSize,
  mapSizeY,
  mapSizeX,
  pixelY: canvasSize / mapSizeY,
  pixelX: canvasSize / mapSizeX,
};
