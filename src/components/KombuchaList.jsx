import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';



function KombuchaList(props) {
  return(
    <div>
      {props.KombuchaList.map((kombucha, index) =>
        <Kombucha name ={kombucha.name}
          about={kombucha.about}
          ingredients={kombucha.ingredients}
          image={kombucha.image}
          key={index}
          id={kombucha.id}
          KombuchaList={props.KombuchaList} onHandleDeleteKombucha={props.onHandleDeleteKombucha}
          />


      )}
    </div>
  );
}

KombuchaList.propTypes = {
  KombuchaList: PropTypes.array,
  onHandleDeleteKombucha: PropTypes.func
};
export default KombuchaList;
