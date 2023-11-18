import s from './styles.css';

export const SupportUkraine: JSX.FC = () => (
  <div class={s.box}>
    <svg aria-label="flag of Ukraine" viewBox="0 0 3 2" width="2em">
      <path fill="#005bbb" d="M0 0h3v1H0z" />
      <path fill="#ffd500" d="M0 1h3v1H0z" />
    </svg>
    <a href="https://u24.gov.ua/">
      Support Ukraine
    </a>
  </div>
);
