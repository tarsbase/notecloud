import React from 'react';
import NotebookIndexItem from '../notebooks/notebook_index_item';
import LoadingSpinner from '../spinners/loading_spinner_container';

export default class NotebooksDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (
      this.node.contains(e.target) ||
      e.target.classList.contains('fa-angle-down')
    ) {
      return;
    } else {
      this.handleClickOutside();
    }
  }

  handleClickOutside() {
    this.props.closeNotebooksDropdown();
  }

  handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (
      bottom &&
      this.props.notebookCount > this.props.notebooks.length &&
      !this.props.loadingSpinnerIsVisible
    ) {
      e.target.scrollTo(0, e.target.scrollHeight);
      this.fetchNextPage();
    }
  }

  fetchNextPage() {
    this.page += 1;
    const opts = {};
    // opts.dropdown = true;
    this.props.getNotebooks(this.page, 'concat', opts);
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
      <div
        className={modalClasses.join(' ')}
        ref={node => {
          this.node = node;
        }}
        onScroll={this.handleScroll}
      >
        <ul className="notebooks-dropdown-list">{notebooks}</ul>
        <LoadingSpinner/>
      </div>
    );
  }
}
