import React from 'react';
import PropTypes from 'prop-types';


function NewKombuchaForm(props){
  let _kombucha = null;
  let _sweetner = null;
  let _flavor = null;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({name: _name.value, about: _about.value, ingredients: _ingredients.value});
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
        ref={(input) => {_kombucha = input;}}/>
      <input
        type='text'
        id='about'
        placeholder='Honey or Sugar'
        ref={(input) => {_sweetner = input;}}/>
      <textarea
        id='ingredients'
        placeholder='Enter flavor of choice.'
        ref={(textarea) => {_flavor = textarea;}}/>
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
  onNewKombuchaCreation: PropTypes.func
};


export default NewKombuchaForm;
