import React from 'react';
import soma from '../assets/images/soma.jpeg';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
    <img style={{width:'70%', position:'relative', marginLeft: '155px'}} src={soma}/>
    <ul>
        <Link to= "/" style={{ textDecoration: 'none', color:'#b4b4b4'}}>HOME</Link> 
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4'}}>WHERE TO BUY</Link> 
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>SOMA TAPROOM</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>ORDER</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>PRODUCTS</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>ABOUT</Link>
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
          color: #cecece;
          
        }
        `}</style>
        
          
        
    </div>
  );
}

export default Header;


<ul className="nav" key="list"> ... </ul>;