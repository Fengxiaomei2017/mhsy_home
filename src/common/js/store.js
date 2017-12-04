export function saveToLocal (id, key, val) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = val
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal (id, key, defaultParm) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return defaultParm
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return defaultParm
  }
  let ret = seller[key]
  return ret || defaultParm
}
