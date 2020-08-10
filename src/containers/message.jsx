import Chat from '../components/Chat/Chat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { send } from '../action/message';

class MessageMain extends Component {
    render() {
        console.log(this.props)
        // const { messages } = this.props.data.messages;
        return (
            <Chat
                // messages = {messages}
                messageAction = {this.props.action.send}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        send: bindActionCreators(send, dispatch),
      },
    };
  }
  
  function mapStateToProps(state) {
    return {
      data: {
        messages: state.messages
      },
    };
  }
  
  export default (connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MessageMain));