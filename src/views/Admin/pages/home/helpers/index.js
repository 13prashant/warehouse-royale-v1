export const metricItems = [
  'Point',
  'IRI',
  'No. of Employees',
  'Individual Turnover',
];
export const roundItems = [1, 2, 3, 4];

export const getXAxisCategories = (title, arr = []) => {
  if (!arr.length) return [];

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(`${title} ${i + 1}`);
  }
  return res;
};
