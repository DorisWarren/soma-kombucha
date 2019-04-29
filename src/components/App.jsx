import React from 'react';
import Header from './Header';
import SomaFlavor from './SomaFlavor';
import Home from './Home';
import NewBatch from './NewBatch';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={SomaFlavor} />
      <Route exact path='/home' component={SomaFlavor} />
      <Route path='/NewBatchForm' component={NewBatch} />
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
