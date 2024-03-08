import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  subscribeBtn = () => {
    this.setState(() => ({isSubscribe: false}))
  }

  subscribedBtn = () => {
    this.setState(() => ({isSubscribe: true}))
  }

  subscribeButton = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return (
        <button onClick={this.subscribeBtn} className="button" type="button">
          Subscribe
        </button>
      )
    }
    return (
      <button onClick={this.subscribedBtn} className="button" type="button">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="greet">Thank you! Happy Learning</p>
        {this.subscribeButton()}
      </div>
    )
  }
}

export default Welcome
