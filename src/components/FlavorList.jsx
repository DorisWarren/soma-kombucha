import React from 'react';
import Day from './Day';

function FlavorList(){
  return (
    <div>
      <hr/>
      {masterSomaFlavor.map((ticket, index) =>
        <Ticket kombucha={ticket.kombucha}
          sweetner={ticket.sweetner}
          flavor={ticket.flavor}
          key={index}/>
      )}

    </div>
  );
}

export default FlavorList;
