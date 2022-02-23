import express from "express";
import morgan from "morgan";

const PORT = 4000;

// express application 생성
const app = express();

// morgan으로 middleware 생성
const logger = morgan("dev");

// get request
app.use(logger);

// 라우터 생성
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// 외부 접속 listen
const handleListening = () =>
  console.log(`Server listening osn port http://localhost:${PORT} 🤖`);

app.listen(PORT, handleListening); // port번호, callback함수
