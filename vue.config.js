const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
        "process.env.MARVEL_BASE_URL": JSON.stringify(
          process.env.MARVEL_BASE_URL
        )
      })
    ]
  }
};
