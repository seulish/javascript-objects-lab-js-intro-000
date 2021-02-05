function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key]: value })
  return obj
}

//passed
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  delete obj[key]
}

//passed
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
