import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    buttonPressed : 0
  }


  constructor(props){
    super(props);
    this.doSomething = this.doSomething.bind(this);
  }

  doSomething(){
    console.log("Shell");
  }
  
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br></br>
        <button onClick={this.doSomething}>
          Press me
        </button>
        </header>
      </div>
    );
  }
  
}

export default App;