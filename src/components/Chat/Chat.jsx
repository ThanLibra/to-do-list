import React, { Component } from 'react';
import './style.scss';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }

        this.enterMessage = this.enterMessage.bind(this)
        this.send = this.send.bind(this)
    }

    enterMessage(event) {
        this.setState({ message: event.target.value })
    }

    send() {
        this.props.send(this.state.message)
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar"></img>
                    <p>Hello. How are you today?</p>
                    <span className="time-right">11:00</span>
                </div>
                {
                    this.props.messages.map((mess, key) => {
                        return (
                            <div key={key} className="container darker">
                                <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" className="right"></img>
                                <p>{mess.content}</p>
                                <span className="time-left">11:01</span>
                            </div>
                        )
                    })
                }
                <div className="form-group">
                    <label className="badge badge-success mb-1 mt-4">Enter messages</label>
                    <textarea onChange={this.enterMessage} className="form-control" rows="3"></textarea>
                    <button onClick={this.send} type="button" className="btn btn-primary float-right mt-2">Send</button>
                </div>
            </div>
        )
    }
}

export default Chat;