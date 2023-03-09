import s from './App.css';
import { ColorPicker } from './ColorPicker';
import { HexInputs } from './HexInputs';
import { RgbaInputs } from './RgbaInputs';

export const App: FC = () => {
  return (
    <div class={s.page}>
      <header class={s.header}>
        <a href="/" class={s.left}>
          1x1 Pixel PNG
        </a>
        <div class={s.right}></div>
      </header>
      <aside class={s.toolbar}>
        <HexInputs />
        <RgbaInputs />
        <ColorPicker />
      </aside>
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
