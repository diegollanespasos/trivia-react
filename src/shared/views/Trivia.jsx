import React from 'react';
import {Card} from "../organisms/Card"

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
    backgroundColor:"#33485f"

  };
  
const buttonNavigation = {
  
};

export const Trivia = () => {
    return (
      <React.Fragment>
        <p style={counterStyle}>COUNTER: 0/10</p>
        <Card/>
        <div>
          <button style={buttonStyle}>Previous</button>
          <button style={buttonStyle}>Answer</button>
          <button style={buttonStyle}>Next</button>
        </div>
      </React.Fragment>
    );
}