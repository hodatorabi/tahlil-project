export const listToDict = (idsList) => {
  let idsDict = {}
  for (let i = 0; i < idsList.length; i++) {
    idsDict[idsList[i].id] = idsList[i]
  }
  return idsDict
}

export const toArray = (obj) => {
  let result = Object.keys(obj).map(function (key) {
    return [Number(key), obj[key]]
  })
  return result
}
