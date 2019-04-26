import React from 'react';
import Home from './Home';
import KombuchaQuestions from './KombuchaQuestions';

class NewBatch extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
      // this.handleClick = this.handleClick.bind(this)
    }
   //    handleClick(){
   //   this.setState({formVisibleOnPage: true});
   // }
   
    render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <Home />;
      } else {
        currentlyVisibleContent = <KombuchaQuestions/>;
      }
      return (
        <div>
       {currentlyVisibleContent}
     </div>
      );
    }
  }

export default NewBatch;