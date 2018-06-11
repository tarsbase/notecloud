import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/${this.props.type}?search=${this.state.searchTerm}`);
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.searchTerm}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        placeholder={`Find a ${this.props.type.slice(0, this.props.type.length - 1)}`}
        className="search-bar"
      />
    );
  }
}

export default withRouter(SearchForm);
