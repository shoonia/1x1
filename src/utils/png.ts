import type { IRgba } from '../store/types';

type R = readonly number[];

const CRC32_INIT = 4294967295;
const ADLER32_MOD = 65521;
const CRC32_POLY = 3988292384;
const DEFLATE_NLEN_MASK = 65535;

const CRC32_TABLE = Array<number>(256);

for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (CRC32_POLY ^ (c >>> 1)) : (c >>> 1);
  }
  CRC32_TABLE[i] = c >>> 0;
}

const u32 = (n: number): R => [
  (n >>> 24) & 255,
  (n >>> 16) & 255,
  (n >>> 8) & 255,
  n & 255,
];

const crc32 = (buf: R): R => {
  let c = CRC32_INIT;
  for (let i = 0; i < buf.length; i++) {
    c = CRC32_TABLE[(c ^ buf[i]) & 255] ^ (c >>> 8);
  }

  return u32((c ^ CRC32_INIT) >>> 0);
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
  const nlen = DEFLATE_NLEN_MASK - len;

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
    len & 255,
    len >> 8,
    // NLEN (LE, ~LEN)
    nlen & 255,
    nlen >> 8,
    // scanline
    ...scanline,
    // adler32
    ...u32(adler32(scanline)),
  ];

  return [
    // PNG signature
    137, 80, 78, 71, 13, 10, 26, 10,
    // IHDR len(13) + 'IHDR'
    0, 0, 0, 13,
    73, 72, 68, 82,
    // IHDR: w,h,bit,color,comp,filter,interlace
    0, 0, 0, 1, 0, 0, 0, 1, 8, hasAlpha ? 6 : 2, 0, 0, 0,
    // IHDR CRC
    ...ihdrCrc,
    // IDAT len + data
    0, 0, 0, hasAlpha ? 16 : 15,
    ...idat,
    // IDAT CRC
    ...crc32(idat),
    // IEND
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
  ];
};
