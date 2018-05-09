import React from 'react';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      type,
      logout,
      openNotebooksModal,
      closeNotebooksModal,
      openTagsModal,
      closeTagsModal,
      notebooksModalIsOpen,
      tagsModalIsOpen
    } = this.props;

    if (type === "Notes") {
      if (notebooksModalIsOpen) {
        closeNotebooksModal();
      }
      if (tagsModalIsOpen) {
        closeTagsModal();
      }
      return;
    }

    if (type === "Notebooks") {
      if (notebooksModalIsOpen) {
        closeNotebooksModal();
      } else {
        openNotebooksModal();
      }
      return;
    }

    if (type === "Tags") {
      if (tagsModalIsOpen) {
        closeTagsModal();
      } else {
        openTagsModal();
      }
      return;
    }

    if (type === 'Logout') {
      logout();
    }

  }

  render() {
    return (
      <div>
        <i
          className={this.props.classes.join(' ')}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
