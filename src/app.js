import { config } from "dotenv";
config();
import express from "express";
import router from "./routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
