import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';


render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('root')
);
registerServiceWorker();
