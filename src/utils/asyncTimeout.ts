export function asyncTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
