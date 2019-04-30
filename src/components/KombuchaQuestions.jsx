import React from 'react';
import PropTypes from 'prop-types';

function KombuchaQuestions(props){
  return (
    <div>
      <p>Have you gone through all steps to create your new Kombucha?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
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
