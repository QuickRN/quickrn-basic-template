module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        '@lib': './src/lib',
        '@hooks': './src/hooks',
        '@assets': './src/assets',
        '@screens': './src/screens',
        '@components': './src/components',
        '@navigation': './src/navigation',
      },
    ],
  ],
}
