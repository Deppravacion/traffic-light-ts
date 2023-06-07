export const getLightColor = (currLight: string, desiredLight: string) => {
  if (desiredLight === currLight) {
    return currLight
  } else {
    return 'black'
  }
}