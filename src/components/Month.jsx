import React from 'react';
import PropTypes from 'prop-types';
import Produce from './Produce';


function Month(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <div className="vegName">
        {props.selection.map((vegetable, index) =>
          <Produce vegetable={vegetable}
            key={index}/>
        )}
      </div>
      <style jsx>{`
        h3 {
          text-align: center;
          font-size: 1.5em;
          color:#5f3812
        }
        .vegName{
          display: flex;
          flex-direction: column;
          justifiy-content: center;
          align-items: center;
          color:#e15f26;
        }

        `}</style>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Month;
