import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainContent from './components/profile/MainContent';
import Footer from './components/footer/footer';
import TopMenu from './components/header/top-menu';
import MainMenu from './components/header/main-menu';
import './assets/prestyles/style.sass';
import Dialogs from './components/dislogs/Dislogs';
import { BrowserRouter, Route } from 'react-router-dom';
// import state from '../src/redux/state';
import store from './redux/state';

let renderDOMTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <header>
                    <TopMenu />
                    <MainMenu />
                </header>
                <Route path="/dialogs" render={() => <Dialogs state={state.messagesPage} dispatch={store.dispatch.bind(store)} />} />
                <Route path="/profile" render={() => <MainContent state={state.profilePage} dispatch={store.dispatch.bind(store)} />} />
                <Footer />
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector('body')
    )
};
renderDOMTree(store.state);

store.subscribe(renderDOMTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();