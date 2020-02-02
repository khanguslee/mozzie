import React, { FunctionComponent, useState } from 'react';

export type MqttConnectionOptions = {
  host: string;
  port: string;
};

type LoginFormProps = {
  onSubmitHandler: (mqttConnectionOptions: MqttConnectionOptions) => void;
};

export const LoginForm: FunctionComponent<LoginFormProps> = props => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');

  const mqttConnectionOptions = {
    host,
    port,
  };

  const onClickHandler = () => {
    if (!host) {
      throw new Error('Empty Host given');
    }

    if (!port) {
      throw new Error('Empty port given');
    }
    props.onSubmitHandler(mqttConnectionOptions);
  };

  return (
    <>
      <div>
        Host:
        <input type="text" onChange={event => setHost(event.target.value)} />
      </div>
      <div>
        Port:
        <input type="text" onChange={event => setPort(event.target.value)} />
      </div>
      <button onClick={onClickHandler}>Connect</button>
    </>
  );
};
