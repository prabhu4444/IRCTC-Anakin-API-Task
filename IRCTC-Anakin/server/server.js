const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/train", require("./routes/train"));
app.use("/api/user", require("./routes/user"));
app.use("/api/book", require("./routes/book"));
app.use("/api/auth", require("./routes/auth"));

mongoose //If its not able to connect to my atlas DB you can test it against any local mongoDB database
  .connect("mongodb+srv://prabhusatyam44:<password>@anakin-db.csy1q1v.mongodb.net/?retryWrites=true&w=majority&appName=anakin-db", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Database Connection Established`))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
