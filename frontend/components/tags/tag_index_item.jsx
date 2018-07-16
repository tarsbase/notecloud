import React from 'react';
import { withRouter } from 'react-router-dom';


class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trashIsVisible: false };
    this.showTrash = this.showTrash.bind(this);
    this.hideTrash = this.hideTrash.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  showTrash(e) {
    this.setState({ trashIsVisible: true }); 
  }

  hideTrash(e) {
    this.setState({ trashIsVisible: false });
  }

  handleTrashClick(e) {
    e.preventDefault();
    const { openDeleteModal, tag} = this.props;
    openDeleteModal('tags', tag);
  }

  handleLinkClick(e) {
    this.props.history.push(`/tags/${this.props.tag.id}/notes`);
    this.props.closeTagsModal();
  }

  render() {
    return (
      <li className="tag-list-item" onMouseLeave={this.hideTrash}>
        <div
          className="tag"
          onClick={this.handleLinkClick}
          onMouseEnter={this.showTrash}
        >
          <div className="tag-name">{this.props.tag.name}</div>
          <div className="tag-notes">{this.props.tag.notes.length}</div>
        </div>
        {this.state.trashIsVisible && (
          <i
            className="fa fa-trash tag-trash"
            aria-hidden="true"
            onClick={this.handleTrashClick}
          />
        )}
      </li>
    );
  }
}

export default withRouter(TagIndexItem);