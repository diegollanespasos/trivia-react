import React, { useEffect, useState } from "react";
import { Card } from "../organisms/Card";
import { fetchQuestions } from "../services/triviaService";

const counterStyle = {
  backgroundColor:"#33485f",
  margin: "45px",
  padding: "50px",
  borderRadius: "8px"
};

const buttonStyle = {
    fontSize:"20px",
    fontWeight: "bolder",
    margin: "20px",
    backgroundColor:"#33485f",
};

const buttonNavigation = {
    display: "flex",
    justifyContent: "center",
};

export const Trivia = () => {
    const [questions, updateQuestions] = useState();
    const [isLoading, updateLoading] = useState(true);
    const [questionNo, updateQuestionNo] = useState(0);
    const [score, updateScore] = useState(0);
  
    useEffect(() => {
      const receiveQuestions = async () => {
        updateQuestions(await fetchQuestions());
        updateLoading(false);
      };
      receiveQuestions();
    }, []);
  
    const handleCallback = (isCorrect) => {
      if (isCorrect) {
        updateScore(score + 1);
      }
    };
  
    const handleQuestionJump = (step) => {
      if (questionNo < 9 && step === "forth") {
        updateQuestionNo(questionNo + 1);
      }
      if (questionNo > 0 && step === "back") {
        updateQuestionNo(questionNo - 1);
      }
    };
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!isLoading) {
      return (
        <React.Fragment>
          <p style={counterStyle}>SCORE: {score}/10</p>
          <Card
            question={questions[questionNo].question.replace(/&quot;|&#039;|&rsquo;/gi,"'")}
            answers={questions[questionNo].incorrect_answers}
            correctAnswer={questions[questionNo].correct_answer}
            isCorrect={handleCallback}
            handleQuestionJump={handleQuestionJump}
          />
          <div style={buttonNavigation}>
            <button style={buttonStyle} onClick={() => handleQuestionJump("back")}>
              Previous
            </button>
            <button style={buttonStyle} onClick={() => handleQuestionJump("forth")}>
              Next
            </button>
          </div>
        </React.Fragment>
      );
    }
  };