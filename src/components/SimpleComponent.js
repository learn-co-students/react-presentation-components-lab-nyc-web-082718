import React, {Component} from 'react'

class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  } //end of constructor

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
      this.setState({
        mood: newMood
      })
  }//end of handleClick

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }//end of render function

}

export default SimpleComponent;
