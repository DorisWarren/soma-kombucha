import React from 'react';
import Kombucha from './Kombucha';

function KombuchaList() {
  return(
    <div>
      {masterKombuchaList.map((kombucha,index) =>
        <Kombucha name ={kombucha.name}
          about={kombucha.about}
          ingredients={kombucha.ingredients}
          nutritionalFacts={kombucha.nutritionalFacts}
          image={kombucha.image}
          key={index}/>
      )}
    </div>
  );
}

export default KombuchaList;
