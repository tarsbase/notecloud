import React from 'react';
import NavButtonContainer from './nav_button_container';
import { Link } from 'react-router-dom';

export default class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notebooksModalIsOpen, tagsModalIsOpen } = this.props;
    const sidebarNavClasses = ['sidebar-nav'];
    if (this.props.tooltipHidden) {
      sidebarNavClasses.push('fixed');
    }
    return (
      <div className={sidebarNavClasses.join(' ')}>
        <div>
          <Link to="/notes" className="fa fa-plus-circle fa-2x new-note-link"></Link>
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
