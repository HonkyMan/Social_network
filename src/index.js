import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainContent from './components/profile/MainContent';
import Footer from './components/footer/footer';
import TopMenu from './components/header/top-menu';
import MainMenu from './components/header/main-menu';
import './assets/prestyles/style.sass';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/redux-store';
import DialogsContainer from './components/dislogs/DialogsContainer';
import { Provider } from 'react-redux';
// import state from '../src/redux/state';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <header>
                    <TopMenu />
                    <MainMenu />
                </header>
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile" render={() => <MainContent />} />
                <Footer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('body')
)

// store.subscribe(() => {
//     let state = store.getState();
//     renderDOMTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();