import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

// express application 생성
const app = express();

// morgan으로 middleware 생성
const logger = morgan("dev");

// get request
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
