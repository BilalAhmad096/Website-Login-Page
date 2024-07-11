const combineReducers = reducers => {
  return (state, action) => {
    const tempState = { ...state }
    Object.keys(tempState).forEach((key) => {
      tempState[key] = reducers[key](tempState[key], action)
    })
    return tempState
  }
}

export const getResizedImage = (url, width, height) => {
  const defaultWidth = 256
  const defaultHeight = 256
  const quality = 75
  const imageUrlArray = url.split('image/upload/')
  if (imageUrlArray && imageUrlArray.length === 2) {
    const resizedUrl = `${imageUrlArray[0].replace('http:', 'https:')}image/upload/c_pad,h_${defaultHeight},q_${quality},w_${defaultWidth}/${imageUrlArray[1]}`
    return resizedUrl
  }
  return url
}

export default combineReducers
