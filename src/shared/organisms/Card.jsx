import React from "react";

const divStyle = {
    backgroundColor:"#33485f",
    margin: "25px",
    padding: "50px",
    borderRadius: "8px"
};

export const Card = ({ question, answers, correctAnswer, isCorrect, wasAnswered, handleWasAnswered }) => {

  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer && wasAnswered === false) {
      isCorrect(true);
      handleWasAnswered();
    } else {
      isCorrect(false);
    }
  };

  const allAnswers = () => {
    const randomNumber =Math.floor(Math.random() * (answers.length+1));
    const answersArray = [...answers];
    answersArray.splice(randomNumber, 0, correctAnswer);
    return answersArray;
  };

  return (
    <React.Fragment>
      <div style={divStyle}>
        <h2> {question} </h2>
        {allAnswers().map((answer, index) => (
          <p key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </p>
        ))}
      </div>
    </React.Fragment>
  );
};