import express from "express";

const PORT = 4000;

// express application 생성
const app = express();

// get request
app.get("/", () => console.log("Somebody is trying to go home."));

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
