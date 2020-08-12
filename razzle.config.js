const path = require('path')
const postcssPlugins = require('./postcss.config').plugins

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        forkTsChecker: {
          tslint: false,
        },
      },
    },
    'vue',
  ],
  modify(baseConfig) {
    const config = { ...baseConfig }

    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
    }
    config.resolve.modules.unshift(path.resolve(__dirname, 'src'))
    config.module.rules.unshift({
      test: /\.(vue|ts|js)$/,
      enforce: 'pre',
      loader: require.resolve('eslint-loader'),
      options: {
        useEslintrc: true,
        eslintPath: require.resolve('eslint'),
        ignore: false,
      },
    })

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            sourceMap: true,
          },
        },
      ],
    })

    return config
  },
}
