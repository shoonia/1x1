import s from './App.css';

export const App: FC = () => {
  return (
    <div class={s.page}>
      <header class={s.header}>
        <a href="/" class={s.left}>
          1x1 Pixel PNG
        </a>
        <div class={s.right}></div>
      </header>
      <aside class={s.toolbar}></aside>
      <main class={s.main}>
        <h1>
          One pixel Base64 encoded transparent PNG generator
        </h1>
      </main>
      <footer class={s.footer}>
        <div class={s.left}>
          1x1
        </div>
        <div class={s.right}></div>
      </footer>
    </div>
  );
};
