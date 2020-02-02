import React, { FunctionComponent, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'mqtt';

import Login from '../view/Login';
import { MqttConnectionOptions } from '../components/LoginForm';

import './App.less';

const App: FunctionComponent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const loginHandler = (mqttConnectionOptions: MqttConnectionOptions) => {
    if (!isConnected) {
      const mqttOptions = {
        reconnectPeriod: 1000,
        connectTimeout: 5000,
      };
      const { host, port } = mqttConnectionOptions;
      const mqttBrokerUrl = `mqtt://${host}:${port}`;
      const client = connect(mqttBrokerUrl, mqttOptions);

      client.on('connect', (connack: any) => {
        setIsConnected(true);
        client.publish('test', 'message');
      });

      client.on('error', error => {
        console.log('error', error);
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
