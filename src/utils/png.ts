import type { IRgba } from '../store/types';

type R = readonly number[];

const CRC32_INIT = 4294967295;
const ADLER32_MOD = 65521;
const CRC32_POLY = 3988292384;
const DEFLATE_NLEN_MASK = 65535;

const createCrc32Table = (): R => {
  const table: number[] = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (CRC32_POLY ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
};

const CRC32_TABLE: R = createCrc32Table();

const u32 = (n: number): R => [
  (n >>> 24) & 255,
  (n >>> 16) & 255,
  (n >>> 8) & 255,
  n & 255,
];

const crc32 = (buf: number[]): number => {
  let c = CRC32_INIT;
  for (let i = 0; i < buf.length; i++) c = CRC32_TABLE[(c ^ buf[i]) & 255] ^ (c >>> 8);

  return (c ^ CRC32_INIT) >>> 0;
};

const adler32 = (data: R): number => {
  let x = 1;
  let y = 0;

  for (let i = 0; i < data.length; i++) {
    x = (x + data[i]) % ADLER32_MOD;
    y = (y + x) % ADLER32_MOD;
  }
  return ((y << 16) | x) >>> 0;
};

export const makePixelPng = ({ r, g, b, a }: IRgba): R => {
  const hasAlpha = a !== 255;

  const ihdr: R = [
    0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8,
    hasAlpha ? 6 : 2,
    0, 0, 0,
  ];

  const scanline = [0, r % 256, g % 256, b % 256];

  if (hasAlpha) {
    scanline.push(a % 256);
  }

  const ihdrCrc = crc32(ihdr.slice(4));
  const ihdrFinal: R = [...ihdr, ...u32(ihdrCrc)];
  const len = scanline.length;
  const nlen = ~len & DEFLATE_NLEN_MASK;
  const adler: R = u32(adler32(scanline));

  const zlibData: R = [
    120, 1, 1,
    len & 255,
    len >> 8,
    nlen & 255,
    nlen >> 8,
    ...scanline,
    ...adler,
  ];

  const idat: R = [...u32(zlibData.length), 73, 68, 65, 84, ...zlibData];
  const idatCrc = crc32(idat.slice(4));
  const idatFinal: R = [...idat, ...u32(idatCrc)];

  return [
    137, 80, 78, 71, 13, 10, 26, 10,
    ...ihdrFinal,
    ...idatFinal,
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
  ];
};
