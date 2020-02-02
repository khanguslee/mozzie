import React, { FunctionComponent } from 'react';

import { LoginForm, MqttConnectionOptions } from '../components/LoginForm';

type LoginProps = {
  onSubmitHandler: (mqttConnectionOptions: MqttConnectionOptions) => void;
};

const Login: FunctionComponent<LoginProps> = props => {
  return (
    <div>
      <h1>mozzie</h1>
      <div>
        <LoginForm onSubmitHandler={props.onSubmitHandler} />
      </div>
    </div>
  );
};

export default Login;
