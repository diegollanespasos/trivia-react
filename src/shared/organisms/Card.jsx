import React from "react";

const divStyle = {
    backgroundColor:"#33485f",
    margin: "25px",
    padding: "50px",
    borderRadius: "8px"
};

export const Card = ({ questionObject, isCorrect, handleWasAnswered }) => {
  const question = questionObject.question.replace(/&quot;|&#039;|&rsquo;/gi,"'");
  const  { correct_answer, wasAnswered, randomizedAnswers } = questionObject;

  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === correct_answer && wasAnswered === false) {
      isCorrect(true);
    } else {
      isCorrect(false);
    }
    handleWasAnswered();
  };

  return (
    <React.Fragment>
      <div style={divStyle}>
        <h2> {question} </h2>
        {randomizedAnswers.map((answer, index) => (
          <p key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </p>
        ))}
        { 
         wasAnswered ? <h2>You have already answered</h2> : <h2>Please select an answer</h2> 
        }
      </div>
    </React.Fragment>
  );
};