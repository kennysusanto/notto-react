import React from 'react';

function PageLogin(props) {
  const doLogin = () => {
    props.setLoggedIn(true);
  };

  return (
    <div>
      <div>
        <h1>PageLogin</h1>
        <div>
          <input />
          <button onClick={doLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default PageLogin;