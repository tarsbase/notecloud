import React from 'react';
import NotebookIndexItem from './notebook_index_item';

export default class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks.map(notebook => (
      <NotebookIndexItem
        key={notebook.id}
        notebook={notebook}
        deleteNotebook={this.props.deleteNotebook}
      />
    ));
    return <ul>{notebooks}</ul>;
  }
}
