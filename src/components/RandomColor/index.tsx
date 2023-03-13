import s from './styles.css';
import { dispatch } from '../../store';
import { randomHex } from '../../utils';

export const RandomColor: FC = () => {
  const click: EventListener = () => {
    dispatch('set/hex', randomHex(6) + 'ff');
  };

  return (
    <button
      type="button"
      aria-label="random color"
      class={s.btn}
      onclick={click}
    >
      <svg height="40" width="40" viewBox="0 0 290 221" aria-hidden fill="currentColor">
        <path d="M239 128l-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5l44 61 31-70-43-61-32 70zm32 67l-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z" />
        <circle transform="matrix(-.67 -.29 .04 -.97 188.24 152.27)" r="14" />
        <circle transform="matrix(-.65 -.28 .07 -.94 188.32 98.63)" r="14" />
        <circle transform="matrix(.69 .43 -.47 .38 132.73 156.33)" r="14" />
        <circle transform="matrix(.69 .43 -.47 .38 95.04 160.39)" r="14" />
        <circle transform="matrix(.69 .43 -.47 .38 153.61 186.19)" r="14" />
        <circle transform="matrix(.69 .43 -.47 .38 115.92 190.25)" r="14" />
        <circle transform="matrix(-.93 .28 -.11 .94 114.82 96.89)" r="14" />
      </svg>
    </button>
  );
};
