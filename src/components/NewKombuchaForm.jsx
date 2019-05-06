import React from 'react';
// import Header from './Header';


function NewKombuchaForm(){
  let _kombucha = null;
  let _sweetner = null;
  let _flavor = null;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    console.log(_kombucha.value);
    console.log(_sweetner.value);
    console.log(_flavor.value);
    _kombucha.value = '';
    _sweetner.value = '';
    _flavor.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKombuchaFormSubmission}>
      <input
        type='text'
        id='kombucha'
        placeholder='Kombucha Type'
        ref={(input) => {_kombucha = input;}}/>
      <input
        type='text'
        id='sweetner'
        placeholder='Honey or Sugar'
        ref={(input) => {_sweetner = input;}}/>
      <textarea
        id='flavor'
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

export default NewKombuchaForm;
