import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";

const data = [
  {
    id: 1,
    question: "Which is the fastest truck sold in 2023?",
    answers: [
      {
        text: "Roush Ford F-150 Nitemare",
        correct: false,
      },
      {
        text: "2023 Ford F-150 Raptor",
        correct: false,
      },
      {
        text: "Hennessey Ram 1500 TRX Mammoth",
        correct: true,
      },
      {
        text: "2023 GMC Hummer EV",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which Quentin Tarantino film has the all time highest sales?",
    answers: [
      {
        text: "Inglorious Basterds",
        correct: false,
      },
      {
        text: "Reservoir Dogs",
        correct: false,
      },
      {
        text: "Pulp Fiction",
        correct: false,
      },
      {
        text: "Django Unchained",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "Which of these mountain ranges is the tallest?",
    answers: [
      {
        text: "Manaslu (Nepal)",
        correct: true,
      },
      {
        text: "Shishapangma (Tibet)",
        correct: false,
      },
      {
        text: "Denali (Alaska, USA)",
        correct: false,
      },
      {
        text: "Mount Elbrus (Russia)",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which of these is the fastest swimmer?",
    answers: [
      {
        text: "Yellowfin Tuna",
        correct: false,
      },
      {
        text: "Mako Shark",
        correct: false,
      },
      {
        text: "Black Marlin",
        correct: true,
      },
      {
        text: "Swordfish",
        correct: false,
      },
    ],
  },
];

const moneyPyramid = [
  { id: 1, amount: "$ 100" },
  { id: 2, amount: "$ 200" },
  { id: 3, amount: "$ 300" },
  { id: 4, amount: "$ 500" },
  { id: 5, amount: "$ 1000" },
  { id: 6, amount: "$ 2000" },
  { id: 7, amount: "$ 4000" },
  { id: 8, amount: "$ 8000" },
  { id: 9, amount: "$ 16000" },
  { id: 10, amount: "$ 32000" },
  { id: 11, amount: "$ 64000" },
  { id: 12, amount: "$ 125000" },
  { id: 13, amount: "$ 250000" },
  { id: 14, amount: "$ 500000" },
  { id: 15, amount: "$ 1000000" },
].reverse();

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [pause, setPause] = useState(false);

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">
            <Trivia
              data={data}
              setPause={setPause}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
        </div>
        <div className="pyramid">
          <ul className="money-list">
            {moneyPyramid.map((m) => (
              <li
                key={`money-${m.id}`}
                className={
                  questionNumber === m.id
                    ? "money-list-item active"
                    : "money-list-item"
                }
              >
                <span className="money-list-item-number">{m.id}</span>
                <span className="money-list-item-amount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
