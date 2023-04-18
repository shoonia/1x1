window.dataLayer ??= [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._: unknown[]): void {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export const Analytics: FC = () => {
  gtag('js', new Date());
  gtag('config', 'G-2W35Q7B86C');

  return process.env.NODE_ENV === 'production'
    ? <script async src="https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C" />
    : null;
};
