import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes/soccerRouters";
import cors from "cors";
const app = express();
const PORT = 8080;

// Mongo Connection
mongoose.Promise = mongoose.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CORS setup
app.use(cors());

// Bodyparser setup to transpile so thay can understand.
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Response Araha hai is port pay Running ${PORT}`);
});

app.listen(PORT, () => console.log(`Your Sever is Running on PORT ${PORT}`));
