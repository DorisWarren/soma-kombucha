import React from 'react';
import Header from './Header';
import SomaFlavor from './SomaFlavor';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <SomaFlavor/>
      <Route exact path='/' component={SomaFlavor} />
      <Route path='/Home' component={Home} />
      <Route component={Error404} />
      </Switch>
      <style jsx global>{`
        body {
          margin-top: 100px;
          font-family: sans-serif;
          box-style: border-box;
          background-color: #FFFFFF;
        }
        `}</style>
    </div>
  );
}

export default App;
