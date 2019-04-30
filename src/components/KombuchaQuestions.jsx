import React from 'react';
import PropTypes from 'prop-types';

function KombuchaQuestions(props){
  return (
    <div>
      <p>Choose from the following to customize your own kombucha!</p>
      <button onClick={props.onTroubleshootingConfirmation}>Next</button>
      <style jsx>{`
        div{

          display: flex;
          justify-content:space-around;
          text-align: center;
          letter-spacing: 4px;
          font-family:bree;
          font-size:20px;
          font-weight: 400;
          color: black;
          flex-wrap:wrap;

        }

        `}</style>
    </div>
  );
}

KombuchaQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default KombuchaQuestions;
