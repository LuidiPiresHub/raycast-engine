import { world } from '../config/world.js'
import { map } from '../config/map.js'

const minimapCanvas = document.querySelector('.minimapCanvas')
const minimapCtx = minimapCanvas.getContext('2d')

const { canvasSize, mapSizeY, mapSizeX, pixelX, pixelY } = world

minimapCanvas.width = canvasSize
minimapCanvas.height = canvasSize

const colorMap = {
  0: 'white',
  1: 'black',
}

export const drawMinimap = () => {
  minimapCtx.clearRect(0, 0, canvasSize, canvasSize)

  for (let y = 0; y < mapSizeY; y++) {
    for (let x = 0; x < mapSizeX; x++) {
      const chunk = map[y][x]
      minimapCtx.fillStyle = colorMap[chunk]
      minimapCtx.fillRect(
        Math.floor(pixelX * x),
        Math.floor(pixelY * y),
        Math.ceil(pixelX),
        Math.ceil(pixelY),
      )
    }
  }
  
}
