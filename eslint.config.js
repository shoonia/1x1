import js from '@eslint/js';
import ts from 'typescript-eslint';
import jsx from 'jsx-dom-runtime/eslint-plugin';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
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
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
        },
      ],
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
