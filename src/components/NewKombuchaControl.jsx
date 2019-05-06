import React from 'react';
import KombuchaQuestions from './KombuchaQuestions';
import NewKombuchaForm from './NewKombuchaForm';
import PropTypes from "prop-types";

class NewKombuchaControl extends React.Component {

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
        currentlyVisibleContent = <NewKombuchaForm onNewKombuchaCreation={this.props.onNewKombuchaCreation}/>;
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

  NewKombuchaControl.propTypes = {
    onNewKombuchaCreation: PropTypes.func
  };
  
export default NewKombuchaControl;
