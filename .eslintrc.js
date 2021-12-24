module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect" 
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', "jsx-a11y"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:jsx-a11y/recommended"],
  rules: {
    semi: 0,
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    radix: 'off',
  },
};