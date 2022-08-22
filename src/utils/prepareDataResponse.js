const verifyiIfIsBoolean = (value) => {
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  } else {
    return value
  }
}

export const prepareDataResponse = (data) => {
  const copy = { ...data }
  const prepareData = [{}]

  // Return as an Array
  // Object.values(copy).forEach(value => {
  //   if (!Array.isArray(value)) {
  //     prepareData.push(verifyiIfIsBoolean(value))
  //   } else {
  //     prepareData.push(verifyiIfIsBoolean(value[0]))
  //   }
  // })

  // Return as an Object
  Object.keys(copy).forEach(key => {
    if (!Array.isArray(copy[key])) {
      prepareData[0][key] = (verifyiIfIsBoolean(copy[key]))
    } else {
      prepareData[0][key] = (verifyiIfIsBoolean(copy[key][0]))
    }
  })

  return prepareData
}
