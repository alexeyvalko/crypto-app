export const getPagesCount = (total: number, limit: number) =>
  Math.ceil(total / limit);
