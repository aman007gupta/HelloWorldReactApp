import logo from '../src/assets/images/Logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      tittle: 'hello from Aman'
    }
  }

  clickOnBLPage = (e) => {
    console.log("Save Button is clicked", e);
    window.open(this.url, "_blank")
  }
  render(){
    return(
      <div class ="App">
        <h1>{this.state.tittle}</h1>
        <img src={logo} onClick={this.clickOnBLPage}
        alt= 'BridgeLabz Logo'/>
      </div>
    )
  }
}
export default App;
