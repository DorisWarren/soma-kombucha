import React from 'react';
import PropTypes from 'prop-types';


function Produce(props) {
  return (
    <div>
      <p>{props.vegetable}</p>
    </div>
  );
}

Produce.propTypes = {
  vegetable: PropTypes.string
};

export default Produce;
