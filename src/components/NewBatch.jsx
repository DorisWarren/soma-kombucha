import React from 'react';
import Home from './Home';
import KombuchaQuestions from './KombuchaQuestions';

class NewBatch extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
      this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }
      handleTroubleshootingConfirmation(){
        this.setState({formVisibleOnPage: true});
   }
   
    render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <Home/>;
      } else {
        currentlyVisibleContent = <KombuchaQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
      }
      return (
        <div>
       {currentlyVisibleContent}
     </div>
      );
    }
  }

export default NewBatch;