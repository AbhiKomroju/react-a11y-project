export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  const nums = numbers.split(",");
  const sum = nums.reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum;
}
