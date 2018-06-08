import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ajaxGet, ajaxPost} from './utils/index'

window.ajaxGet = ajaxGet;
window.ajaxPost = ajaxPost;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
