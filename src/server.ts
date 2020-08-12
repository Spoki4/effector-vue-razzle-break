import express from 'express'
import serialize from 'serialize-javascript'
import proxy from 'express-http-proxy'
import { config } from './config'

let assets: {
  client: {
    css: string;
    js: string;
  };
}

const syncLoadAssets = () => {
  // eslint-disable-next-line import/no-dynamic-require
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
}
syncLoadAssets()

const markup = (assetsCss: string, assetsJs: string) => `
<!doctype html>
  <html lang="">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Electronic Education</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${assetsCss ? `<link rel="stylesheet" href="${assetsCss}">` : ''}
    <script>window.env = ${serialize(config)};</script>
    ${
  process.env.NODE_ENV === 'production'
    ? `<script src="${assetsJs}" defer></script>`
    : `<script src="${assetsJs}" defer crossorigin></script>`
}
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`

const server = express()

if (process.env.NODE_ENV === 'development') {
  server.use('/api', proxy('http://79.143.25.181/'))
}

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    res.send(markup(assets.client.css, assets.client.js))
  })

export default server
