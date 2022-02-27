require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'eslint-config-kentcdodds',
    'eslint-config-kentcdodds/jest',
    'eslint-config-kentcdodds/jsx-a11y',
    'eslint-config-kentcdodds/react',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/alt-text': 'off',
  },
}
