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
import { Toast } from './Toast';
import { Download } from './Download';
import { History } from './History';
import { readyStore } from '../store';

export const App: JSX.FC = () =>
  <div ref={readyStore} class={s.page}>
    <header class={s.header}>
      <a href="./" class={s.left} aria-current="page" aria-label="Reload page">
        1x1 Pixel PNG
      </a>
      <div class={s.right}>
        <SupportUkraine />
        <RandomColor />
      </div>
    </header>
    <aside class={s.toolbar} aria-label="Color input controls">
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
    <aside class={s.history} aria-label="Color history">
      <History />
    </aside>
    <Toast />
    <footer class={s.footer}>
      <div class={s.left}>
        <HotKeys />
      </div>
      <div class={s.right}>
        <Stars />
        <PixelGIF />
      </div>
    </footer>
  </div>;
