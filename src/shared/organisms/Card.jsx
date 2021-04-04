import React from 'react';

const divStyle = {
    backgroundColor:"#33485f",
    margin: "45px",
    padding: "50px",
    borderRadius: "8px"
};

export const Card = ({ question, answers, correctAnswer, isCorrect, handleQuestionJump }) => {
  
  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      isCorrect(true);
    } else {
      isCorrect(false);
    }
    handleQuestionJump('forth')
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