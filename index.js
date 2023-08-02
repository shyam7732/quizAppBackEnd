import express from "express";
import cors from "cors";
import connection from "./dataBaseConnection/connection.js";
import Question from "./schema/question.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "https://quiz-app-front-end.vercel.app" }));

app.get("/quiz", async (req, res) => {
  const questions = await Question.find({})
  res.status(200).end(JSON.stringify(questions))
})

connection.then(() =>
  app.listen(8080, () => {
    console.log("Server started at port 8080");
  })
);