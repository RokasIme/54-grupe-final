import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/ApiRouter.js";
import { PORT_CLIENT, PORT_SERVER } from "./env.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:" + PORT_CLIENT,
};

app.use(express.static("public"));

app.use("/api", cors(corsOptions), apiRouter);

app.get("*error", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "No such route",
  });
});

app.listen(PORT_SERVER, () => {
  console.log(`Server: http://localhost:${PORT_SERVER}`);
});
