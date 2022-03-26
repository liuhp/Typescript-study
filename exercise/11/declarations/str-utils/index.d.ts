declare module 'str-utils' {
  // export const ...
  // export function ...

  type StrUtils = (value: string) => string

  export const strReverse: StrUtils
  export const strToLower: StrUtils
  export const strToUpper: StrUtils
  export const strRandomize: StrUtils
  export const strInvertCase: StrUtils
}
