import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import e18e from '@e18e/eslint-plugin';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    prettierConfig,
    prettierPlugin,
    e18e.configs.recommended,
    {
        ignores: ['coverage/*', 'dist/*', 'node_modules/*', 'tap-snapshots/*'],
    },
];
