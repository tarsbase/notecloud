import React from 'react';
import NotebookIndexItem from '../notebooks/notebook_index_item';

export default class NotebooksDropdown extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClick, false);
  // }

  // handleClick(e) {
  //   if (this.node.contains(e.target)) {
  //     return;
  //   } else {
  //     this.handleClickOutside();
  //   }
  // }

  // handleClickOutside() {
  //   this.props.closeNotebooksDropdown();
  // }

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
      <div className={modalClasses.join(' ')} ref={node => {this.node = node;}}>
        <ul>{notebooks}</ul>
      </div>
    );
  }
}
