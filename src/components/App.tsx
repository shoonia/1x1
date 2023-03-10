import s from './App.css';
import { RandomColor } from './RandomColor';
import { SupportUkraine } from './SupportUkraine';
import { ColorPicker } from './ColorPicker';
import { HexInputs } from './HexInputs';
import { RgbaInputs } from './RgbaInputs';
import { Output } from './Output';
import { HotKeys } from './HotKeys';
import { Download } from './Download';

export const App: FC = () => {
  return (
    <div class={s.page}>
      <header class={s.header}>
        <a href="/" class={s.left}>
          1x1 Pixel PNG
        </a>
        <div class={s.right}>
          <SupportUkraine />
          <RandomColor />
        </div>
      </header>
      <aside class={s.toolbar}>
        <HexInputs />
        <RgbaInputs />
        <ColorPicker />
      </aside>
      <main class={s.main}>
        <div class={s.content}>
          <h1 class={s.title}>
            One pixel Base64 encoded transparent PNG generator
          </h1>
          <Output />
          <Download />
        </div>
      </main>
      <footer class={s.footer}>
        <div class={s.left}>
          <HotKeys />
        </div>
        <div class={s.right}></div>
      </footer>
    </div>
  );
};
