type Writeable<T> = { -readonly [P in keyof T]?: T[P] };

export const getDiff = <T>(prev: T, next: Partial<T>): Partial<T> => {
  const state: Writeable<T> = {};

  let key: keyof T;

  for (key in next) {
    if (prev[key] !== next[key]) {
      Object.assign(state, { [key]: next[key] });
    }
  }

  return state;
};
