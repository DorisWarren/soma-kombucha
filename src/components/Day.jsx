import React from 'react';
import PropTypes from 'prop-types';


function Day(props) {
  return(
    <div>
    <img src={require(`../assets/images/${props.image}`)} alt="somaImages"/>
      <h3>{props.name}</h3> 
      <h3>{props.about} </h3>
      <h2>{props.ingredients}</h2>
      <p><em>Booth {props.nutritionalFacts}</em></p>
      <style jsx>{`
        div {
          text-align: center;
        }
        h2 {
          text-align: center;
          font-size: 1.5em;
          padding: 20px;
          color: #9fa845;
        
        }
        img {
          height: 300px;
          width:auto;
          
        }
        
        `}</style>
    </div>
  );
}
Day.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  ingredients: PropTypes.string,
  nutritionalFacts: PropTypes.string,
  image:PropTypes.string

};

export default Day;
