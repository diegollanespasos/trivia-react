import React from 'react';

const divStyle = {
    backgroundColor:"#33485f",
    margin: "45px",
    padding: "50px",
    borderRadius: "8px"
};

export const Card = ({ question, answers, correctAnswer, isCorrect }) => {
  
  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      isCorrect(true);
    } else {
      isCorrect(false);
    }
  };

  const allAnswers = () => {
    const length = answers.length; 
    const random =Math.floor(Math.random() * (length+1));
    const array = [...answers];
    array.splice(random, 0, correctAnswer);
    console.log(array);
    return array;
  };
  
/*
  const allAnswers = () => {
    return [...answers, correctAnswer];
  };
  */

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