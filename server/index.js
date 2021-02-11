require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});

const Router = require('koa-router');
const router = new Router();



router.get('/api/:object', async (ctx) => {
  try {
    const results = await fetch("https://" + ctx.cookies.get('shopOrigin') + "/admin/api/2021-01/" + ctx.params.object + ".json", {
      headers: {
        "X-Shopify-Access-Token": ctx.cookies.get('accessToken'),
      },
    })
    .then(response => response.json())
    .then(json => {
      return json;
    });
    ctx.body = {
      status: 'success',
      data: results
    };
  } catch (err) {
    console.log(err)
  }
})









// Import the rest of our application.
module.exports = require('./server.js');
