// import logo from 'logo.svg';
import './App.css';
import React from 'react'
import {render} from 'react-dom'
import {Component} from 'react'

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
      </div>
    )
  }
}
export default App;
