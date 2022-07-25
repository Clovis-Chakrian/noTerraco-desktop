import React, { useState } from "react";
import './styles.css';

function Login() {
  const [counter, setCounter] = useState<number>(0)
  return(
    <div className="container">
      <h1>Hello Login</h1>
      <h2>Contador está em: {counter}</h2>
      <p>Aperte no botão para aumentar o contador</p>
      <div className="button" onClick={() => setCounter(counter + 1)}>
        <p className="textButton">
          Aperte aqui
        </p>
      </div>

      <div className="button" onClick={() => setCounter(0)}>
        <p className="textButton">
          Limpar
        </p>
      </div>
    </div>
  );
}

export default Login;