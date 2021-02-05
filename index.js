//passed
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

//passed
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  obj = { key: 'foo' }
  var new = Object.assign({}, obj)
  delete new[key]
  return new
}

//passed
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
