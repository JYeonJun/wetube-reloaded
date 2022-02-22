import express from "express";

const PORT = 4000;

// express application 생성
const app = express();

const gossipMiddleware = (req, res, next) => {
  next();
};

// get request
app.get("/", gossipMiddleware, (req, res, next) =>
  res.send("<h1>I still love you<h1>")
);
app.get("/login", (req, res) => res.send("Login here."));

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
