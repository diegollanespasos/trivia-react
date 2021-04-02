import React from 'react';

const divStyle = {
    backgroundColor:"#33485f",
    margin: "45px",
    padding: "50px",
    borderRadius: "8px"
};

export const Card = () => {
    return (
        <React.Fragment>
          <div style = {divStyle}>
            <h2>QUESTION</h2>
            <p>ANSWER</p>
            <p>ANSWER</p>
            <p>ANSWER</p>
            <p>ANSWER</p>
          </div>
        </React.Fragment>
      );
}