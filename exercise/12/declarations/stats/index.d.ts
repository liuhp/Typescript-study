// 题目
// declare module 'stats' {
//   export function getMaxIndex(input: unknown, comparator: unknown): unknown;

// }


// 答案1
// declare module 'stats' {
//   type Comparator<T> = (input1: T, input2: T) => number

//   export function getMaxElement<T>(input: T[], comparator: Comparator<T>): T;
//   export function getMinElement<T>(input: T[], comparator: Comparator<T>): T;
//   export function getMedianElement<T>(input: T[], comparator: Comparator<T>): T;

//   export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
//   export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;
//   export function getMedianIndex<T>(input: T[], comparator: Comparator<T>): number;
//   export function getAverageValue<T>(input: T[], comparator: Comparator<T>):number;
// }

// 答案2：优化版
declare module 'stats' {
  type Comparator<T> = (input1: T, input2: T) => number

  type GetElement = <T>(input: T[], comparator: Comparator<T>) => T|null
  export const getMaxElement: GetElement;
  export const getMinElement: GetElement;
  export const getMedianElement: GetElement;

  type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number
  export const getMaxIndex: GetIndex;
  export const getMinIndex: GetIndex;
  export const getMedianIndex: GetIndex;
  export const getAverageValue: GetIndex;
}

