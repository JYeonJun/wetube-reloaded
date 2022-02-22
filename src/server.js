import express from "express";

const PORT = 4000;

// express application 생성
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

// get request
app.use(logger);
app.use(privateMiddleware);
app.get("/", (req, res) => res.send("<h1>I still love you<h1>"));
app.get("/protected", (req, res) => res.send("Welcome to the private lounge."));

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening osn port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
