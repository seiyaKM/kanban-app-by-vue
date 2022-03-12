const bodyParser = require("body-parser");

// Expressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  app.use(bodyParser.json());

  const users = {
    "foo@domain.com": {
      password: "12345",
      userId: 1,
      token: "12345abcd"
    }
  };

  app.post("/auth/login", (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (user) {
      if (user.password !== password) {
        res.status(401).json({ message: "failed login." });
      } else {
        res.json({ userId: user.userId, token: user.token });
      }
    } else {
      res.status(404).json({ message: "unregistered user" });
    }
  });
};
