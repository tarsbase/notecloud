import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: { username: '', password: '' }, errorMsg: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.linkPath !== nextProps.linkPath) {
      this.props.clearErrors();
    }
  }

  componentDidMount() {
    this.usernameInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ errorMsg: '' });
    if (this.state.user.username === '' || this.state.user.password === '') {
      this.setState({ errorMsg: 'Required data is missing' });
    } else {
      const user = Object.assign({}, this.state.user);
      this.props.formAction(user);
    }
  }

  handleClick(e) {
    if (this.props.linkPath === '/') {
      e.preventDefault();
      this.setState({ user: { username: '', password: '' } });
      const guestUser = ['Guest', '123456'];
      const guestName = guestUser[0].split('');
      const guestPass = guestUser[1].split('');
      const setFields = () => {
        if (guestName.length > 0) {
          this.setState({
            user: Object.assign({}, this.state.user, {
              username: this.state.user.username.concat(guestName.shift())
            })
          });
        } else if (guestPass.length > 0) {
          this.setState({
            user: Object.assign({}, this.state.user, {
              password: this.state.user.password.concat(
                guestPass.shift()
              )
            })
          });
        } else {
          clearInterval(interval);
          const user = Object.assign({}, this.state.user);
          this.props.formAction(user);
        }
      };
      const interval = setInterval(setFields, 100);
    }
  }

  update(fieldName) {
    return e =>
      this.setState({
        user: Object.assign({}, this.state.user, {
          [fieldName]: e.target.value
        })
      });
  }

  render() {
    const {
      pageTitle,
      linkTitle,
      linkMsg,
      linkPath,
      containerClass
    } = this.props;
    const errors = this.props.errors.map(err => (
      <li className="errors" key={err}>
        {err}
      </li>
    ));
    return (
      <div className={containerClass}>
        <h1 className="session-form-title">{pageTitle}</h1>
        <div className="session-form-container">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                ref={input => {
                  this.usernameInput = input;
                }}
                className="form-control"
                id="username"
                type="text"
                placeholder="Username"
                value={this.state.user.username}
                onChange={this.update('username')}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="Password"
                value={this.state.user.password}
                onChange={this.update('password')}
              />
            </div>
            {errors}
            <li className="errors">{this.state.errorMsg}</li>
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
