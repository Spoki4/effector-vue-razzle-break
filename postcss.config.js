module.exports = ({ file, options, env }) => ({
  plugins: [
    require('postcss-prepend-imports')(),
    require('postcss-import')({}),
    require('autoprefixer')({}),
    require('postcss-mixins')({}),
    require('postcss-nested')({}),
    require('postcss-simple-vars')({}),
    require('postcss-css-variables')({}),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-url')({
      url: 'rebase',
    }),
    require('postcss-pxtorem')({
      rootValue: 14,
      selectorBlackList: ['html'],
    }),
    require('cssnano')({}),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
})
