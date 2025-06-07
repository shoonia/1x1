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

  const ihdr: R = [
    73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8,
    hasAlpha ? 6 : 2,
    0, 0, 0,
  ];

  const scanline = [0, r, g, b];

  if (hasAlpha) {
    scanline.push(a);
  }

  const len = scanline.length;
  const nlen = DEFLATE_NLEN_MASK - len;

  const zlibData: R = [
    // Zlib header
    120, 1,
    // Block type (fixed Huffman)
    1,
    // Block length (2 bytes)
    len & 255,
    len >> 8,
    // Block length one's complement (2 bytes)
    nlen & 255,
    nlen >> 8,
    // Compressed pixel data (scanline)
    ...scanline,
    // Adler-32 checksum (4 bytes)
    ...u32(adler32(scanline)),
  ];

  const idat: R = [
    // IDAT Chunk Type
    73, 68, 65, 84,
    // Data (zlibData)
    ...zlibData,
  ];

  return [
    // PNG Signature (8 bytes)
    137, 80, 78, 71, 13, 10, 26, 10,
    // IHDR Chunk
    // - Length (4 bytes)
    0, 0, 0, 13,
    // - Type (4 bytes)
    ...ihdr,
    // - CRC (4 bytes)
    ...crc32(ihdr),
    // IDAT Chunk
    // - Length (4 bytes)
    ...u32(zlibData.length),
    ...idat,
    // - CRC (4 bytes)
    ...crc32(idat),
    // IEND Chunk (12 bytes)
    0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
  ];
};
