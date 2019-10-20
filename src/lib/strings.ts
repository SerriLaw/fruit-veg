export function pluralise(name: string, count: number): string {
  return `${count} ${name}${Math.abs(count) !== 1 ? 's' : ''}`;
}
