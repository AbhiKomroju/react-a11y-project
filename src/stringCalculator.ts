export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    numberString = numbers.substring(delimiterEndIndex + 1);

    while (numberString.includes(customDelimiter)) {
      numberString = numberString.replace(customDelimiter, ",");
    }
  }

  const nums = numberString.split(/[\n,]/);
  const parsedNums = nums.map((num) => parseInt(num));
  const negativeNums = parsedNums.filter((num) => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNums.join(",")}`);
  }
  const validNums = parsedNums.filter((num) => num <= 1000);
  const sum = validNums.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
