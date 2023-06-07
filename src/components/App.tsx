import s from './App.css';
import { RandomColor } from './RandomColor';
import { SupportUkraine } from './SupportUkraine';
import { ColorPicker } from './ColorPicker';
import { HexInputs } from './HexInputs';
import { RgbaInputs } from './RgbaInputs';
import { Output } from './Output';
import { HotKeys } from './HotKeys';
import { Stars } from './Stars';
import { PixelGIF } from './PixelGIF';
import { Analytics } from './Analytics';
import { readyStore } from '../store';

export const App: JSX.FC = () => (
  <>
    <div ref={readyStore} class={s.page}>
      <header class={s.header}>
        <a href="./" class={s.left} aria-current="page">
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
        </div>
      </main>
      <footer class={s.footer}>
        <div class={s.left}>
          <HotKeys />
        </div>
        <div class={s.right}>
          <Stars />
          <PixelGIF />
        </div>
      </footer>
    </div>
    <Analytics />
  </>
);
