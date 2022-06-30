import { fromSetToArray } from "./set.lib";

export function getRandomElements<T>(array: T[], count: number) {
  const set = new Set<T>();

  while (set.size < count) {
    set.add(array[Math.round(array.length * Math.random())]);
  }

  return {
    set,
    result: fromSetToArray(set)
  };
}
