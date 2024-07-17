export function getRandom(min:any, max:any) {
  const floatRandom = Math.random()

  const difference = max - min

  const random = Math.round(difference * floatRandom)

  const randomWithinRange = random + min

  return randomWithinRange
}
