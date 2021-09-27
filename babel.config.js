module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: '12.18',
            // https://browserslist.dev/?q=bGFzdCAyIENocm9tZSB2ZXJzaW9ucywgbGFzdCAyIEVkZ2UgdmVyc2lvbnMsIGxhc3QgMiBGaXJlZm94IHZlcnNpb25zLCBsYXN0IDIgU2FmYXJpIHZlcnNpb25zLCBsYXN0IDIgQ2hyb21lQW5kcm9pZCB2ZXJzaW9ucywgbGFzdCAyIElPUyB2ZXJzaW9ucw%3D%3D
            browsers: [
              'last 2 Chrome versions',
              'last 2 Edge versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 ChromeAndroid versions',
              'last 2 IOS versions',
            ],
          },
          modules: isTest ? 'commonjs' : false,
          useBuiltIns: 'usage',
          corejs: 3,
          loose: true,
        },
      ],
      ['@babel/preset-flow'],
    ],
  };
};
