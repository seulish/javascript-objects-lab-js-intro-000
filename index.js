function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key]: value })
  return obj
}

//this one passed
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  delete obj[key]
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
