type Writable<T> = {
  -readonly [P in keyof T]?: T[P];
};

export const getDiff = <T>(prev: T, next: Partial<T>, diff: Writable<T>): Partial<T> => {
  for (const key in next) {
    if (prev[key] !== next[key]) {
      diff[key] = next[key];
    }
  }

  return diff;
};
