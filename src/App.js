import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Analytics} from 'aws-amplify';
import aws_exports from './aws-exports';

import { Authenticator, AuthPiece } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class App extends AuthPiece {
  constructor(props) {
      super(props)
      this._validAuthStates = ['signedIn']
  }
  showComponent(theme) {
    console.log('showComponent', theme)
    Analytics.record('appRender');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class AppWithAuth extends Component {
    render() {
        return  (
            <div>
              <Authenticator>
                <App/>
              </Authenticator>
            </div>
        )
    }
}

export default AppWithAuth;
