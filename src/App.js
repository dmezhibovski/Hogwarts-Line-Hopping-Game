import React, { Component } from 'react'
import Fadein from 'react-fade-in'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(buttonName) {
    alert(buttonName)
  }

  render() {
    return (
      <div className='App vh-100 bg-dark d-flex flex-column align-items-center justify-content-center text-center'>
        <Fadein delay="200">
          <h1 className='text-light font-italic font-weight-light'>
            Hogwarts Line Hopping Game
          </h1> 
          <div className='container-sm px-5 py-2'>
            <Fadein delay='300'>
              <button
                className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                onClick={() => this.handleClick('start')}  
              >Start</button>
              <button
                className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                onClick={() => this.handleClick('rules')}  
              >Rules</button>
              <button
                className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                onClick={() => this.handleClick('devs')}  
              >Devs</button>
            </Fadein>
          </div>
          <footer className='fixed-bottom'>
            <p className='font-italic text-light font-weight-light'>
              Created by: Alex Khrulev, Anthony Greco, Calvin Mo, Daniel Mezh, and McKenzie Day
            </p>
          </footer>
        </Fadein>
      </div>
    )
  }
}

