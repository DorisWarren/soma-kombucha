import React from 'react';
import soma from '../assets/images/soma.jpeg';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
    <img style={{width:'70%', position:'relative', marginLeft: '155px'}} src={soma}/>
    <ul>
        <Link to="/">HOME</Link> 
        <Link to="/">WHERE TO BUY</Link> 
        <Link to="/">SOMA TAPROOM</Link>
        <Link to="/">ORDER</Link>
        <Link to="/">PRODUCTS</Link>
        <Link to="/">ABOUT</Link>
    </ul>
      <style jsx>{`
        ul {
          display: flex;
          justify-content:space-around;
          text-align: center;
          letter-spacing: 4px;
          font-family:bree;
          font-size:14px;
          font-weight: 400;
          
        }
        `}</style>
        
          
        
    </div>
  );
}

export default Header;


<ul className="nav" key="list"> ... </ul>;