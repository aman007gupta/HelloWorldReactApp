import logo from '../src/assets/images/Logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  clickOnBLPage = (e) => {
    console.log("Save Button is clicked", e);
    window.open(this.url, "_blank")
  }
  onNameChange = (event) => {
    console.log("Value is ", event.target.value)
    this.setState({
      name:event.target.value
    })
  }
  render(){
    return(
      <>
        <div class ="App">
          <h1>Hello {this.state.name} from Bridgelabz</h1>
          <img src={logo} onClick={this.clickOnBLPage}
          alt= 'BridgeLabz Logo'/>
        </div>
        <div>
          <input onChange={this.onNameChange}/>
        </div>
      </>
    )
  }
}
export default App;
