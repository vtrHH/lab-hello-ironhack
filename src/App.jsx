import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navbar">
          <div className="App-header-image-wrapper">
            <img
              src="./images/ironhack-logo.svg"
              className="App-logo"
              alt="logo"
            />
            <img src="./images/menu-top.svg" className="App-menu" alt="menue" />
          </div>
        </nav>
        <header className="App-header">
          <div>
            <h1 className="App-header-headline">Say hello to ReactJS</h1>
            <h6 className="App-header-text">
              You will learn a Frontend framework from scratch, to become a
              Ninka Developer
            </h6>
            <button>Awesome!</button>
          </div>
        </header>
        <section className="App-overview-wrapper">
          <div className="App-overview-item">
            <img
              src="./images/icon1.png"
              className="App-overview-image"
              alt="Declarative"
            />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="App-overview-item">
            <img
              src="./images/icon2.png"
              className="App-overview-image"
              alt="Components"
            />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="App-overview-item">
            <img
              src="./images/icon3.png"
              className="App-overview-image"
              alt="Single-Way"
            />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="App-overview-item">
            <img
              src="./images/icon4.png"
              className="App-overview-image"
              alt="JSX"
            />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
