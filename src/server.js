import express from "express";

const PORT = 4000;

// express application 생성
const app = express();

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🤖`);

app.listen(4000, handleListening); // port번호, callback함수
