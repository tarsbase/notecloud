import React from 'react';
import NavButtonContainer from './nav_button_container';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen } = this.props;
    return (
      <div className="sidebar-nav">
        <div>
          <NavButtonContainer type="newNote" />
        </div>
        <div className="main-sub-nav">
          <NavButtonContainer
            type="notes"
            notebooksModalIsOpen={notebooksModalIsOpen}
            tagsModalIsOpen={tagsModalIsOpen}
          />
          <NavButtonContainer
            type="notebooks"
            notebooksModalIsOpen={notebooksModalIsOpen}
            tagsModalIsOpen={tagsModalIsOpen}
          />
          <NavButtonContainer
            type="tags"
            notebooksModalIsOpen={notebooksModalIsOpen}
            tagsModalIsOpen={tagsModalIsOpen}
          />
        </div>
        <div>
          <NavButtonContainer type="logout" />
        </div>
      </div>
    );
  }
}
