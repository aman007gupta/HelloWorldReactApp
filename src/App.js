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
    const nameRegex = RegExp('^[A-z]{1}[A-Za-z\\s]{2,}$')
    console.log(event.target.value)
    this.setState({
      name:event.target.value
    })
    if (nameRegex.test(event.target.value) || event.target.value.length === 0) {
      this.setState({
        nameError:''
      })
    } else {
      this.setState({
      nameError: 'Name is Incorrect'
    })
    }
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
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </>
    )
  }
}
export default App;
