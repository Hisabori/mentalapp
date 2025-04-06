module.exports = {
  presets: ['module:metro-react-native-babel-preset',],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'], // 반드시 이거 있어야 함!
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@': './',
      },
    }],
  ],
};
