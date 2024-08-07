// countSimilarData.js
function countSimilarData(array) {
  const countMap = {};

  array.forEach((item) => {
    if (countMap[item]) {
      countMap[item]++;
    } else {
      countMap[item] = 1;
    }
  });

  const result = Object.keys(countMap).map((key) => ({
    item: key,
    count: countMap[key],
  }));

  return result;
}

// Export the function
module.exports = countSimilarData;
