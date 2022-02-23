import express from "express";
import morgan from "morgan";

const PORT = 4000;

// express application 생성
const app = express();

const logger = morgan("dev");

// get request
app.use(logger);
app.get("/", (req, res) => res.send("<h1>I still love you<h1>"));

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening osn port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
