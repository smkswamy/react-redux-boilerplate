import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginContainer from '../containers/login';
import DashBoardContainer from '../containers/dashboard';


const App = (store) => {
    return(
        <div>
            <Route exact={true} path="/" component={DashBoardContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/dashboard" component={DashBoardContainer} />
        </div>
    )
}

export default class Root extends Component {
    render() {
        const { store } = this.props;
        
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App store={store}/>
                </BrowserRouter>
            </Provider>
        )
    }
}