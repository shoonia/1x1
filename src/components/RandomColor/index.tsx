import s from './styles.css';
import { dispatch } from '../../store';
import { randomHex } from '../../utils';

export const RandomColor: JSX.FC = () => {
  const click: JSX.EventListener = () =>
    dispatch('hex', randomHex());

  return (
    <button
      type="button"
      aria-label="Generate random color"
      class={s.btn}
      on:click={click}
    >
      <svg width="2.5em" fill="currentcolor" viewBox="0 0 290 221" aria-hidden="true">
        <path d="m239 128-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5 44 61 31-70-43-61-32 70zm32 67-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z" />
        {[
          '-.7 -.3 0 -1 188 152)',
          '-.7 -.3 0 -1 188 99)',
          '.7 .4 -.5 .4 133 156)',
          '.7 .4 -.5 .4 95 160)',
          '.7 .4 -.5 .4 154 186)',
          '.7 .4 -.5 .4 116 190)',
          '-.9 .3 -.1 1 115 97)',
        ].map((t) => <circle r="14" transform={'matrix(' + t} />)}
      </svg>
    </button>
  );
};
