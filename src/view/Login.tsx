import React, { FunctionComponent, useState } from 'react';

interface LoginProps {
  onSubmitHandler: (hostname: string) => void;
}

const Login: FunctionComponent<LoginProps> = props => {
  const [host, setHost] = useState('');
  return (
    <div>
      <h1>mozzie</h1>
      <div>
        Host:
        <input type="text" onChange={event => setHost(event.target.value)} />
        <button onClick={() => props.onSubmitHandler(host)}>Connect</button>
      </div>
    </div>
  );
};

export default Login;
