const bodyParser = require("body-parser");

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  app.use(bodyParser.json());

  // TODO: add apis
};
