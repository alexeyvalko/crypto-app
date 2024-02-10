module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', '*.config.[j,t]s'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'simple-import-sort', 'react'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^@/components', '^..$'],
          ['^@/constants', 'constants$', 'common$'],
          ['^@/utils'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['types$', '^./types$'],
          ['^@/images', '^@/icons', '^.+\\.?(css)$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
