import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKombuchaForm(props){
  let _name = null;
  let _about = null;
  let _ingredients = null;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: _name.value, about: _about.value, ingredients: _ingredients.value, id: v4()});
    _name.value = '';
    _about.value = '';
    _ingredients.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Kombucha Type'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='about'
          placeholder='Honey or Sugar'
          ref={(input) => {_about = input;}}/>
        <textarea
          id='ingredients'
          placeholder='Enter flavor of choice.'
          ref={(textarea) => {_ingredients = textarea;}}/>
        <button type='submit'>Create!</button>
      </form>
      <style jsx>{`
        div{
          display: flex;
          justify-content:space-around;
          text-align: center;
          letter-spacing: 4px;
          font-family:bree;
          font-size:14px;
          font-weight: 400;
          color: #cecece;
        }
        `}</style>
    </div>
  );
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func,
};


export default NewKombuchaForm;
