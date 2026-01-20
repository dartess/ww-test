import dartessEslintPluginRecommended from '@dartess/eslint-plugin/recommended';
import dartessEslintPluginRecommendedPostFormat from '@dartess/eslint-plugin/recommended-post-format';
import dartessEslintPluginReact from '@dartess/eslint-plugin/react';
import dartessEslintPluginMobx from '@dartess/eslint-plugin/mobx';
import { parseGitIgnore } from '@dartess/eslint-plugin/utils';
// @ts-ignore: https://github.com/antfu/eslint-plugin-format/issues/11
import format from 'eslint-plugin-format';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  parseGitIgnore(),

  {
    settings: {
      mobx: {
        storeHooks: ['useStore'],
      },
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },

  ...dartessEslintPluginRecommended,
  ...dartessEslintPluginReact,
  ...dartessEslintPluginMobx,

  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    plugins: {
      format,
    },
    rules: {
      'format/prettier': [
        'error',
        {
          parser: 'typescript',
          singleQuote: true,
          printWidth: 100,
        },
      ],
    },
  },

  ...dartessEslintPluginRecommendedPostFormat,

  reactRefresh.configs.recommended,

  {
    name: 'own rules',
    rules: {
      '@typescript-eslint/no-dynamic-delete': 'off',
    },
  },

  {
    name: 'dev-related sources overrides',
    files: ['*.{js,mjs,cjs,ts,mts,jsx,tsx}', 'scripts/**/*'],
    rules: {
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-default-export': 'off',
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
