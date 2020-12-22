export const setValuesWithPrefix = (target, prefix) => {
  for (const key in target) {
    target[key] = `${prefix}${key}`;
  }
};
