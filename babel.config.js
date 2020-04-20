module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './src/assets',
            '@types': './src/@types',
            '@hooks': './src/hooks',
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@services': './src/services',
            '@store': './src/store',
            '@ducks': './src/store/ducks',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};
