import React from 'react';
import Header from './Header';
import WeeklySchedule from './WeeklySchedule';

// import { Switch, Route } from 'react-router-dom';
// import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <WeeklySchedule/>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          box-style: border-box;
          background-color: #FFFFFF;
        }
        `}</style>
    </div>
  );
}

export default App;
