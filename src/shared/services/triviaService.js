const REQUEST_URL = 
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

export const fetchQuestions = async () => {
  return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data["results"].map(obj => {
      const randomNumber =Math.floor(Math.random() * (obj.incorrect_answers.length+1));
      const answersArray = [...obj.incorrect_answers];
      answersArray.splice(randomNumber, 0, obj.correct_answer);      
      return {
        ...obj, 
        randomizedAnswers: answersArray,
        wasAnswered: false
      }
    }))
    .catch(function () {
      console.log("ERROR");
    });
};