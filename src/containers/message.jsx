import Chat from '../components/Chat/Chat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { send } from '../action/message';

class MessageMain extends Component {
    render() {
        return (
            <Chat
                messages = {this.props.data.messages}
                send = {this.props.actions.send}
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
    console.log(state)

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