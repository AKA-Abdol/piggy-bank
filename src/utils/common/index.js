export const trimName = (str, maxWordCount, trimToCount) =>
  `${str.length > maxWordCount ? str.slice(0, trimToCount) + "." : str}`;

export const unique = (arr) => [...new Set(arr)];
