const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
// const path = require("path");

//dotenv
dotenv.config();

//mongodb
connectDB();

//rest object
const app = express();

//const url = "https://redlifemernapp.onrender.com";

const link = "https://redlife.netlify.app/";

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// //static files
// app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(link);
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `node server Running IN ${process.env.DEV_MODE} Modeon port ${process.env.PORT}`
      .bgBlue.white
  );
});
