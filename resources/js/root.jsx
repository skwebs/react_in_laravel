import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './AppRoot';
const ROOT = "root";
if (document.getElementById(ROOT)) {
  ReactDOM.render(
    <React.StrictMode>
      <AppRoot />
      {/* <UserProvider>      </UserProvider> */}
    </React.StrictMode>,
    document.getElementById(ROOT)
  );
}







