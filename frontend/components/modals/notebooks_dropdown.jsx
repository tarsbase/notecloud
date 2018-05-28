import React from 'react';
import NotebookIndexItem from '../notebooks/notebook_index_item';

export default class NotebooksDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notebooks = this.props.notebooks.map(notebook => (
      <NotebookIndexItem
        key={notebook.id}
        notebook={notebook}
        note={this.props.note}
        type="dropdown"
        setCurrentNotebook={this.props.setCurrentNotebook}
        currentNotebook={this.props.currentNotebook}
        updateNote={this.props.updateNote}
        closeNotebooksDropdown={this.props.closeNotebooksDropdown}
      />
    ));
    const modalClasses = ['notebooks-dropdown'];
    if (this.props.notebooksDropdownIsOpen) {
      modalClasses.push('show');
    } else {
      modalClasses.push('hide');
    }
    return (
      <div className={modalClasses.join(' ')}>
        <ul>{notebooks}</ul>
      </div>
    );
  }
}
