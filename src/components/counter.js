import React, {Component} from 'react';

class Counter extends Component {
//state = being happy; you can't change someone's happiness
//props are like adjectives = you can give money
  constructor() {
    super()

    this.state = {
      currency : "Euros"
    }
  }

  render () {
    return (
      <div>
        <p>{this.state.currency}: {this.props.counter}</p>
      </div>
    )
  }

}

export default Counter
