import React from 'react';
import 'toastr/build/toastr.min.css';
import TaskList from "./components/DashboardTask/TaskList";
import MessageMain from "./containers/message";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const initStore = store();
export default function App() {
    return (
        <Provider store={initStore} key={Math.random()}>
            <Router></Router>
                <div >
                    <div className="row">
                        <div className="col-2">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/">TaskList</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/chat">Chat</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-10">
                            <Switch className="container">
                                <>
                                    <div>
                                        <Route exact path="/" component={TaskList}></Route>
                                        <Route exact path="/chat" component={MessageMain}></Route>
                                    </div>
                                </>
                            </Switch>
                        </div>
                    </div>
                </div>
        </Provider>
    )
}