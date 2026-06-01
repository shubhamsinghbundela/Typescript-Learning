// Problem Statement:
// Write a function mergeObjects that merges two objects and returns a new object with all properties.
export function mergeObjects<T>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}
