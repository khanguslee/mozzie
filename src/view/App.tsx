import React, { FunctionComponent } from 'react';
import * as ReactDOM from 'react-dom';

import Login from '../view/Login';

import './App.less';

const App: FunctionComponent = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

declare let module: any;
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
