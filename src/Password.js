import React from 'react';

class Password extends React.Component {
  state = { password: '' };
  render() {
    return (
      <div>
        <p>1. Password Must Be At Least 8 Characters</p>
        <div className="ui input">
          <input
            type="text"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {this.state.password.length >= 8
          ? ' Password Length Acceptable'
          : ' Password Length Not Acceptable'}
      </div>
    );
  }
}

export default Password;
