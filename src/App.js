import logo from '../src/assets/images/dd.jpg';
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
          <input onChange={this.onNameChange}/>
          <span className="error-output">{this.state.nameError}</span>
          <p>At BridgeLabz, we're a techie community of</p>
        <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
        </ul>
        <p>Working together to keep the tech employability of Engineer alive and assess,
            so Tech Companies worldwide can get contributors and creators for Technology Solution.
            We believe this act of human collaboration across an employability platform is essential
            to individual growth and our collective future.</p>
        <p>To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a> to
           learn even more about our mission i.e. <strong>Employability to all</strong>.</p>
        </div>
      </>
    )
  }
}
export default App;