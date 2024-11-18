import express from "express";
import bodyParser from "body-parser";
import path from "path";
import apiRoute from "./routes/apiRoute.js";
import expressRoute from "./routes/expressRoute.js";
import greetingRoute from "./routes/greetingRoute.js";
import nodejsRoute from "./routes/nodejsRoute.js";

import __dirname from "./util/rootpath.js";

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// app.use("/", (req, res) => {
//   res.send("Hi, there!");
// });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use("/api", apiRoute);
app.use("/express", expressRoute);
app.use("/greeting", greetingRoute);
app.use("/nodejs", nodejsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
