import logo from '../src/assets/images/Logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
      tittle: 'hello from Aman'
    }
  }
  render(){
    return(
      <div class ="App">
        <h1>{this.state.tittle}</h1>
        <img src={logo}
        alt= 'BridgeLabz Logo'/>
      </div>
    )
  }
}
export default App;
