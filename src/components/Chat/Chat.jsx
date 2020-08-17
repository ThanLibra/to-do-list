import React, { Component } from 'react';
import './style.scss';
import { withTranslation } from 'react-i18next';
import i18n from '../../lang/i18n';
import * as timeago from 'timeago.js';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            lang: { en: 'en', ja: 'ja' },
            currentLang: 'en',
            scrollTop: 0
        }
        this.refListMessage = React.createRef();
        this.onError = this.onError.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.enterMessage = this.enterMessage.bind(this)
        this.submitSend = this.submitSend.bind(this)
    }

    enterMessage(event) {
        this.setState({ message: event.target.value })
    }
    shouldComponentUpdate() {
        return true;
    }
    onSuccess() {
        console.log('success');
    }
    onError() {
        console.log('error');
    }
    async submitSend() {
        if (this.state.message != ''){
            this.props.messageAction.send(this.state.message, this.onSuccess, this.onError);
            this.setState({ message: '' })
        }
        await this.setState((prevState) => {return {scrollTop: prevState.scrollTop + 100}})
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        // this.refListMessage.current.scrollTo({ top: this.state.scrollTop, behavior: 'smooth' })
    }
    changeLang = () => {
        const cLang = this.state.currentLang == this.state.lang.en ? this.state.lang.ja : this.state.lang.en;
        i18n.changeLanguage(cLang)
        this.setState({ currentLang: cLang })
    }
    render() {
        const { t } = this.props;
        return (
            <>
                <div className="container">
                    {this.props.t('chat:Chat.title')}
                    <div ref={this.refListMessage} className="overflow-auto" style={{ maxHeight: '400px', height: '330px' }}>
                        <div className="container border-0">
                            <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar"></img>
                            <p>Hello. How are you today?</p>
                            <span className="time-right">11:00</span>
                        </div>
                        {
                            this.props.messages.map((mess, key) => {
                                return (
                                    <div key={key} className="container border-0">
                                        <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" className="right"></img>
                                        <p className="text-right" >{mess.content}</p>
                                        <p className="text-right small">{timeago.format(mess.time, this.state.currentLang)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="form-group container">
                        <label className="badge badge-success mb-1 mt-4">{t('common:Label.enter_message')}</label>
                        <textarea onKeyPress={event => event.key == 'Enter' && this.submitSend()} value={this.state.message} onChange={this.enterMessage} className="form-control" rows="3"></textarea>
                        <button onClick={this.submitSend} type="button" className="btn btn-primary float-right mt-2">{t('common:Button.send')}</button>
                    </div>
                </div>
                <button onClick={this.changeLang}>{t('common:Button.change_language')}</button>
            </>
        )
    }
}

export default withTranslation()(Chat);