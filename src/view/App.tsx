import React, { FunctionComponent, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'mqtt';

import Login from '../view/Login';

import './App.less';

const App: FunctionComponent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const loginHandler = (hostname: string) => {
    if (!isConnected) {
      const client = connect(hostname);
      client.on('connect', function() {
        setIsConnected(true);
      });
    }
  };
  return (
    <div>
      <Login onSubmitHandler={loginHandler} />
      {isConnected && <p>Connected!</p>}
    </div>
  );
};

declare let module: any;
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
