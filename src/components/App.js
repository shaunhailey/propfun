import React, { Component } from 'react'
import logo from '../logo.svg'
import '../styles/App.css'
import '../index.js'
import BaseLayout from './BaseLayout.js'
import ChildComponent from './ChildComponent.js'
import DisplayComponent from './DisplayComponent.js'
import Footer from './Footer.js'
import Header from './Header.js'
import ParentComponent from './ParentComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout />
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    )
  }
}

export default App
