module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views'
      }
    }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-transform-typescript']
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
