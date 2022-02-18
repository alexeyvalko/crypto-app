
export const getPriceChangePercentage = (low: number, hight: number, current:number) => {
  const fullRange = hight - low;
  const currentRange = current - low;
  const result = Math.round((currentRange / fullRange) * 100)
  return  result;
};