import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }
  
  update(fieldName) {
    return e => this.setState({ [fieldName]: e.target.value });
  }
  
  render() {
    const title = this.props.formType === 'login' ? 'Login' : 'Signup';
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1 className="session-form-title">{title}</h1>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}
