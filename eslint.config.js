import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typeScriptParser from '@typescript-eslint/parser'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import { ReactThreeFiber } from '@react-three/fiber'

// Initialize FlatCompat with recommendedConfig
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
})

export default [
  // Direct usage of compat with specific configs
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),

  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typeScriptParser,
      parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
      },
    },
    ignores: ['dist', 'eslint.config.js', 'vite.config.ts', 'node_modules/'],
    plugins: {
      ReactThreeFiber,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'off',
      'no-unused-expressions': 'off',
      'no-duplicate-imports': 'error',
      'prefer-template': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'no-useless-escape': 'off',
      'no-constant-condition': 'warn',
      'no-extra-semi': 'off',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: 'useDebouncedEffect',
        },
      ],
      'no-unreachable': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^\\u0000', '^@?\\w', '@/(.*)', '^[./]']],
        },
      ],
    },
  },
]
