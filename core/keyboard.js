export const keysMap = {
  'KeyW': false,
  'KeyA': false,
  'KeyS': false,
  'KeyD': false,
  'ShiftLeft': false,
  'ControlLeft': false,
  'KeyC': false,
}

export const updateKeysState = ({ code, type }) => {
  if (!(code in keysMap)) return
  if (type === 'keydown') keysMap[code] = true
  if (type === 'keyup') keysMap[code] = false
}