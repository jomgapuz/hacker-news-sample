export function fromSetToArray<T>(set: Set<T>) {
  const array: T[] = [];

  set.forEach((item) => array.push(item));

  return array;
}
