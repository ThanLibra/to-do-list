import Chat from '../components/Chat/Chat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageAction from '../action/message';
import styled from 'styled-components';
const CenterCpn = styled.div`
  >div {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    height: 600px;
  }`;
class MessageMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenterCpn>
        <Chat
          messages={this.props.data.messages}
          messageAction={this.props.actions.messageAction}
        />
      </CenterCpn>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      messageAction: bindActionCreators(messageAction, dispatch),
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