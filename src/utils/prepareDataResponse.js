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
  const prepareData = []

  console.log('copy', copy)

  Object.values(copy).forEach(value => {
    if (!Array.isArray(value)) {
      prepareData.push(verifyiIfIsBoolean(value))
    } else {
      prepareData.push(verifyiIfIsBoolean(value[0]))
    }
  })
  return prepareData
}
