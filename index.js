function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key]: value })
  return obj
}
