export const keysMap = {
  'w': false,
  'a': false,
  's': false,
  'd': false,
}

export const updateKeyState = ({ key, type }) => {
  if (!(key in keysMap)) return
  if (type === 'keydown') keysMap[key] = true
  if (type === 'keyup') keysMap[key] = false
}
