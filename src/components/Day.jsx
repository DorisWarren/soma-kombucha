import React from 'react';
import PropTypes from 'prop-types';


function Day(props) {
  return(
    <div>
      <hr/>
      <h3>{props.day} {props.hours} </h3>
      <h2>{props.location}</h2>
      <p><em>Booth {props.booth}</em></p>
      <img src={require(`../assets/images/${props.image}`)} alt="somaImages"/>
      <hr/>
      <style jsx>{`
        div {
          text-align: center;
        }
        h2 {
          text-align: center;
          font-size: 1.5em;
          padding: 10px;
          color: #9fa845;
        
        }
        img {
          height: 200px;
        }
        `}</style>
    </div>
  );
}
Day.propTypes = {
  day: PropTypes.string,
  hours: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.string,
  image:PropTypes.string

};

export default Day;
