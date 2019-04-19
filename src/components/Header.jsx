import React from 'react';
import veggies from '../assets/images/soma.jpeg';


function Header(){
  return (
    <div>
      <img  style={{width:'100%'}} src={veggies}/>
      <style jsx>{`
        h2 {
          text-align: center;
          font-size: 1.5em;
          padding: 10px;
          color: #9fa845;
          
        }
        `}</style>
    </div>
  );
}

export default Header;
