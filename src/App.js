import React from 'react';
import 'toastr/build/toastr.min.css';
import MessageMain from "./containers/message";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import styled from 'styled-components';
import './lang/i18n';
import './lang/timeago';
// import * as timeago from 'timeago.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const initStore = store();
const LinkElement = styled.div` 
    li {
            border: 1px solid #ddd; /* Add a thin border to each list item */
            margin-top: -1px; /* Prevent double borders */
            background-color: #f6f6f6; /* Add a grey background color */
            padding: 12px; /* Add some padding */ 
        }
    `;
export default function App() {
    return (
        <Provider store={initStore} key={Math.random()}>
            <Router>
                <nav>
                    <ul>
                        <LinkElement>
                            <li>
                                <Link to="/chat">chat</Link>
                            </li>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                        </LinkElement>
                    </ul>
                </nav>

                <Switch className="container">
                    <>
                        <div>
                            {/* <Route exact path="/" component={TaskList}></Route> */}
                            <Route exact path="/chat" component={MessageMain}></Route>
                        </div>
                    </>
                </Switch>
            </Router>
        </Provider>
    )
}