function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

export default analyzeArray;
