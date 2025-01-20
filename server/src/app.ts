import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalError";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// ALl  Application routes
app.use("/api/v1/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API server");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
