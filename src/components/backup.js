import React from 'react';

export default class Toggle extends Component {
  state = {
      on: false,
  }

  toggle = () => {
      this.setState({
          on: this.state.on
      })
  }

  render() {
    return (
      <div>
        {this.state.on && <h1>Toggle Me</h1>}
        <button onClick={this.toggle} className="ck__footer__theme"><i className="ck__footer__theme__icon"></i></button>
      </div>
    )
  }
}
