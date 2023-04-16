import {Component} from 'react'

import './index.css'

class App extends Component {
  state = {count: 0}

  randomNumber = () => {
    const val = Math.ceil(Math.random() * 100)
    return val
  }

  onGenerateRandomNumber = () => {
    const val = this.randomNumber()
    this.setState({count: val})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="random-number">Random Number</h1>

          <p className="para">
            Generate a random number in the range of 0 to 100.
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default App
