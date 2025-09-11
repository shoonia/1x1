import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import jsx from 'jsx-dom-runtime/eslint-plugin';
import ts from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  ts.configs.recommended,
  jsx,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        process: 'readonly',
      },
    },
    rules: {
      'no-else-return': 'error',
      'no-trailing-spaces': 'error',
      'quotes': [
        'error',
        'single',
      ],
      'semi': [
        'error',
        'always',
      ],
      'space-before-function-paren': [
        'error',
        {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always',
        },
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
    },
  },
);
