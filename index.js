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
  var obj = { key: 'foo' }
  var new = Object.assign({}, old)
  delete new[key]
}

//passed
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
