export const roundNumber = (num: number, decimalPlaces = 0) => {
  num = Math.round((num + "e" + decimalPlaces) as any);
  return Number(num + "e" + -decimalPlaces);
};
