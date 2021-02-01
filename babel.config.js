module.export = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-private-methods",
  [
      "@babel/plugin-transform-runtime",
      {
          "regenerator": true
      }
  ]
],
  transformIgnorePatterns: true
};
