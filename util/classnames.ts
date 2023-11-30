export default (classObj: object): string => {
  return Object.entries(classObj)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");
};
