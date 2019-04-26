import React from 'react';
import Header from './Header';

function Home(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder=' Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default Home;
