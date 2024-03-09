export const createQueryString = <ObjectWithParams extends object>(queryObj: ObjectWithParams) =>
  Object.entries(queryObj)
    .filter(([, value]) => value || value === false || value === 0)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
