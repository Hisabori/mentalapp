module.exports = {
  presets: ['module:metro-react-native-babel-preset',
            '@babel/preset-flow' //babel이 flow 인식하도록 세팅],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './',
        },
      },
    ],
    // ✅ 추가
    ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
  ],
};
