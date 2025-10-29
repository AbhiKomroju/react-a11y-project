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
  const sum = nums.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum;
}
