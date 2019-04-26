import React from 'react';
import Header from './Header';

class NewBatch extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
    }

    render(){
      return (
        <div>
          <p>Create custom batch!</p>
        </div>
      );
    }
  }

export default NewBatch;