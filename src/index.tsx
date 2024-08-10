export function multiply(x: number, y: number): Promise<number> {
  return Promise.resolve(x * y);
}
