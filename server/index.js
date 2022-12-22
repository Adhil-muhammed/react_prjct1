import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/postes.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const connection_url = `mongodb+srv://newproject:newproject123@cluster0.vbrciqo.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(connection_url)
  .then(() =>
    app.listen(PORT, () => console.log(`sever running on in the port:${PORT}`))
  )
  .catch((error) => console.log(error.messages));
// mongoose.set("strictQuery", true);
