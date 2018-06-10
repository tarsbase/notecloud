import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }

  handleClick(e) {
    console.log('Heelo');
    if (this.props.linkPath === '/') {
      e.preventDefault();
      this.setState({ username: '', password: '' });
      const guestUser = ['Guest', '123456'];
      const guestName = guestUser[0].split('');
      const guestPass = guestUser[1].split('');
      const setFields = () => {
        if (guestName.length > 0) {
          this.setState({
            username: this.state.username.concat(guestName.shift())
          });
        } else if (guestPass.length > 0) {
          this.setState({
            password: this.state.password.concat(guestPass.shift())
          });
        } else {
          clearInterval(interval);
          const user = Object.assign({}, this.state);
          this.props.formAction(user);
        }
      };
      const interval = setInterval(setFields, 100);
    } else {
      return;
    }
  }

  update(fieldName) {
    return e => this.setState({ [fieldName]: e.target.value });
  }

  render() {
    const {
      pageTitle,
      linkTitle,
      linkMsg,
      linkPath,
      containerClass
    } = this.props;
    return (
      <div className={containerClass}>
        <h1 className="session-form-title">{pageTitle}</h1>
        <div className="session-form-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
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
            <input
              type="submit"
              className="btn btn-success session-btn"
              value={pageTitle}
            />
          </form>
        </div>
        <div className="session-link-msg">{linkMsg}</div>
        <Link
          className="session-form-link"
          to={linkPath}
          onClick={this.handleClick}
        >
          {linkTitle}
        </Link>
      </div>
    );
  }
}
