module.exports = {
  native: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: ['xmlns', 'xmlns:*', 'shape-rendering'], // fill
        },
      },
    ],
  },
};
