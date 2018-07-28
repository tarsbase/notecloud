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
      // this.props.history.push(`/${this.props.types}?search=${this.state.searchTerm}`);
      this.props.setSearchTerm(this.state.searchTerm, this.props.type);
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
        className="form-control search-bar"
      />
    );
  }
}

export default withRouter(SearchForm);
