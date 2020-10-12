const express = require("express");
//to run our mongodb database
require("./db/mongoose.js");
const app = express();
const port = process.env.PORT;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up and running at port " + port);
});
