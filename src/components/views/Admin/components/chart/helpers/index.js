export const getRoundNames = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(`Round ${i + 1}`);
  }
  return res;
};
