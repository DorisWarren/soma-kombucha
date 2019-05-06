import React from 'react';
import PropTypes from 'prop-types';


function Kombucha(props) {
  return(
    <div>
    <img src={require(`../assets/images/${props.image}`)} alt="somaImages"/>
      <h3>{props.name}</h3>
      <p>{props.about} </p>
      <p>{props.ingredients}</p>
      <p><em> {props.nutritionalFacts}</em></p>
      <style jsx>{`
        div {
          text-align: center;
        }
        h3 {
          color: #9fa845;

        }
        p{
          text-align: center;
          font-size: 1.2em;
          padding: 20px;
          margin: 50px;

        }
        img {
          height: 300px;
          width:auto;

        }

        `}</style>
    </div>
  );
}
Kombucha.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  ingredients: PropTypes.string,
  nutritionalFacts: PropTypes.string,
  image:PropTypes.string

};

export default Kombucha;
