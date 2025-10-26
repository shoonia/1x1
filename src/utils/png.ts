import type { IRgba } from '../store/types';

type R = readonly number[];

const CRC32_INIT = 4294967295;
const CRC32_POLY = 3988292384;

const CRC32_TABLE = Array<number>(256);

for (let i = 0; i < 256; i++) {
  let c = i;
  let k = 8;
  while (k--) {
    c = (c & 1) ? (CRC32_POLY ^ (c >>> 1)) : (c >>> 1);
  }
  CRC32_TABLE[i] = c;
}

const u32 = (n: number): R => [
  (n >>> 24) & 255,
  (n >>> 16) & 255,
  (n >>> 8) & 255,
  n & 255,
];

const crc32 = (buf: R): R => {
  let c = CRC32_INIT;
  for (const b of buf) {
    c = CRC32_TABLE[(c ^ b) & 255] ^ (c >>> 8);
  }

  return u32(c ^ CRC32_INIT);
};

const adler32 = (data: R): R => {
  let x = 1;
  let y = 0;

  for (const d of data) {
    y += x += d;
  }
  return u32((y << 16) | x);
};

export const makePixelPng = ({ r, g, b, a }: IRgba): R => {
  const hasAlpha = a < 255;

  // IHDR CRC (precomputed)
  const ihdrCrc = hasAlpha
    ? [31, 21, 196, 137]
    : [144, 119, 83, 222];

  // scanline: filter byte + pixel channels
  const scanline = [0, r, g, b];

  if (hasAlpha) {
    scanline.push(a);
  }

  const len = scanline.length;

  // IDAT chunk
  const idat: R = [
    // 'IDAT'
    73, 68, 65, 84,
    // zlib header
    120,
    1,
    // deflate stored final block
    1,
    // LEN (LE)
    len,
    0,
    // NLEN (LE, ~LEN)
    (255 - len),
    255,
    // scanline
    ...scanline,
    // adler32
    ...adler32(scanline),
  ];

  return [
    // PNG signature
    137, 80, 78, 71, 13, 10, 26, 10,
    // IHDR len(13) + 'IHDR'
    0, 0, 0, 13,
    73, 72, 68, 82,
    // IHDR: w,h,bit,color,comp,filter,interlace
    0, 0, 0, 1, 0, 0, 0, 1, 8, (hasAlpha ? 6 : 2), 0, 0, 0,
    // IHDR CRC
    ...ihdrCrc,
    // IDAT len + data
    0, 0, 0, (11 + len),
    ...idat,
    // IDAT CRC
    ...crc32(idat),
    // IEND
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
  ];
};
