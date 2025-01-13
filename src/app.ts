import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Specify the frontend URL here
    credentials: true, // Allow credentials (cookies, tokens)
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    Message: "Auth Starter Backend is Running",
  });
});

export default app;
