import React from 'react';
import PropTypes from 'prop-types';

function KombuchaQuestions(props){
  return (
    <div>
      <p>Have you gone through all steps to create your new Kombucha?</p>
      <button>Yes</button>
    </div>
  );
}

KombuchaQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default KombuchaQuestions;