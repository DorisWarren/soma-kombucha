import React from 'react';
import Day from './Day';

function FlavorList(){
  return (
    <div>
      <hr/>
      {masterSomaFlavor.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default FlavorList;