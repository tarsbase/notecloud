import React from 'react';
import NavButtonContainer from './nav_button_container';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen, shortcutsModalIsOpen } = this.props;
    const sidebarNavClasses = ['sidebar-nav'];
    return (
      <div className={sidebarNavClasses.join(' ')}>
        <div>
          <NavButtonContainer 
            type="new note"
            notebooksModalIsOpen={notebooksModalIsOpen}
            tagsModalIsOpen={tagsModalIsOpen}
          />
        </div>
        <div className="main-sub-nav">
          <NavButtonContainer
            type="shortcuts"
            shortcutsModalIsOpen={shortcutsModalIsOpen}
            />
            <NavButtonContainer
            type="notes"
            notebooksModalIsOpen={notebooksModalIsOpen}
            tagsModalIsOpen={tagsModalIsOpen}
            shortcutsModalIsOpen={shortcutsModalIsOpen}
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
