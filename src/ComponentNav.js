import React from 'react'

function ComponentNav(props) {
  const doLogout = () => {
    props.setLoggedIn(false);
  }
  return (
    <div>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>
          <button onClick={doLogout}>Log out</button>  
        </li>
      </ul>
    </div>
  )
}

export default ComponentNav