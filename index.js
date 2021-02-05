function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key]: value })
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
