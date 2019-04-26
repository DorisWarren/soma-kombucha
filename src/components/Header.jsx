import React from 'react';
import soma from '../assets/images/soma.jpeg';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
    <img style={{width:'70%', position:'relative', marginLeft: '9rem',}} src={soma}/>
    <ul>
        <Link to= "/"style={{ textDecoration: 'none', color:'#b4b4b4'}}>HOME</Link> 
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4'}}>WHERE TO BUY</Link> 
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>SOMA TAPROOM</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>ORDER</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>PRODUCTS</Link>
        <Link to="/" style={{ textDecoration: 'none', color:'#b4b4b4' }}>ABOUT</Link>
    </ul>
    <h3>KOMBUCHA</h3>
      <style jsx>{`
        div{
          margin-top: 100px;
        }
        ul {
          display: flex;
          justify-content:space-around;
          text-align: center;
          letter-spacing: 4px;
          font-family:bree;
          font-size:14px;
          font-weight: 400;
          color: #cecece;
          flex-wrap:wrap;
        }
        h3{
          text-align: center;
          front-family: proxima-nova;
          font-size:36px;
          font-weight:100;
          font-style:normal;
          letter-spacing:0px;
          line-height: 1.5em;
        }
    
        `}</style>
    </div>
  );
}

export default Header;

