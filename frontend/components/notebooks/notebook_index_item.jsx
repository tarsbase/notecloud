import React from 'react';
import { Link } from 'react-router-dom';

export default class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { notebook } = this.props;
    return (
        <li className="notebook-list-item list-item">
          <div className="list-item-header">
            <div className="notebook-item-title">
              {notebook.name}
            </div>
            <div
              className="fa fa-trash list-item-trash"
              onClick={this.handleClick}
            />
          </div>
          <div className="note-count">
            {notebook.notes.length} notes
          </div>
        </li>
    );
  }
}
