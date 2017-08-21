import React, { Component } from 'react'
import ChildComponent from './ChildComponent.js'
import DisplayComponent from './DisplayComponent.js'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    //state lives here
    this.state = {
      whatToSay: '',
      whatWasSaid: ''
    }
  }
  handleInput(e) {
    e.preventDefault()
    //set the state on input change
    this.setState({ whatToSay: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    //check console to see if firing
    console.log('fired')
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({ whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatWasSaid })
    //clear our input by resetting state
    this.setState({ whatToSay: '' })
  }
  render() {
    return (
      <div>
        Smart Component: I have a function, but something isn't working? I also need to pass that function to the
        ChildComponent.
        <div>
          {this.props.children}
          <input onChange={this.handleInput} value={this.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={this.whatWasSaid} />
        </div>
      </div>
    )
  }
}
export default ParentComponent
