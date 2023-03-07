import s from './App.css';

export const App: FC = () => {
  return (
    <div class={s.page}>
      <header class={s.header}>
        <a href="/" class={s.logo}>
          1x1
        </a>
        <div class={s.menu}></div>
      </header>
      <aside class={s.toolbar}></aside>
      <main class={s.main}>
        <h1>Dashboard</h1>
      </main>
      <footer class={s.footer}></footer>
    </div>
  );
};
