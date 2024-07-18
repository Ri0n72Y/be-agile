/**
 * @param hex format: #ffffff
 * @param opacity [0, 1]
 * @returns rgba string
 */
export function hex2rgba(hex: string, opacity: number) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
