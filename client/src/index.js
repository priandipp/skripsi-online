import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
