import React from 'react';
import Kombucha from './Kombucha';
import PropTypes from 'prop-types';

function KombuchaList(props) {
  console.log(KombuchaList)
  return(
    <div>
      {props.KombuchaList.map((kombucha) =>
        <Kombucha name ={kombucha.name}
          about={kombucha.about}
          ingredients={kombucha.ingredients}
          image={kombucha.image}
          key={kombucha.id}/>
      )}
    </div>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array
};
export default KombuchaList;
