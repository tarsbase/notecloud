import React from 'react';
import NotebookIndexItem from '../notebooks/notebook_index_item';
import TagIndexItem from '../tags/tag_index_item';

export default class SidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, entityName: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAction();
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
    this.props.openCreateModal();
  }

  closeModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ modalIsOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    const entity = { name: this.state.entityName };
    this.props.createAction(entity);
    this.closeModal();
  }

  handleChange() {
    return e => this.setState({ ['entityName']: e.target.value });
  }

  render() {
    let entities;
    if (this.props.type === 'notebooks') {
      entities = this.props.entities.map(entity => (
        <NotebookIndexItem
          key={entity.id}
          notebook={entity}
          deleteNotebook={this.props.deleteAction}
          openDeleteModal={this.props.openDeleteModal}
          closeNotebooksModal={this.props.closeModal}
        />
      ));
    } else {
      entities = this.props.entities.map(entity => (
        <TagIndexItem key={entity.id} tag={entity} />
      ));
    }
    const singularName = this.props.type
      .toUpperCase()
      .slice(0, this.props.type.length - 1);
    const modalClasses = ['fs-modal'];
    if (this.state.modalIsOpen) {
      modalClasses.push('show-fs-modal');
    } else {
      modalClasses.push('hide-fs-modal');
    }
    return (
      <div className="sidebar-index">
        <div className="sidebar-header">
          <h1>{this.props.type.toUpperCase()}</h1>
          <i className="fa fa-plus sidebar-plus" onClick={this.openModal} />
        </div>
        <ul>{entities}</ul>
        <div className={modalClasses.join(' ')}>
          <div className="fs-modal-content">
            <div className="fs-modal-header">
              <div className="fa fa-book fa-2x" />
              <div>CREATE {singularName}</div>
            </div>
            <input
              className="fs-modal-input"
              type="text"
              value={this.state.entityName}
              placeholder={`Title your ${singularName.toLowerCase()}`}
              onChange={this.handleChange()}
            />
            <div className="fs-modal-btns">
              <div
                className="btn btn-cancel fs-modal-btn"
                onClick={this.closeModal}
              >
                Cancel
              </div>
              <div className="empty-space" />
              <div
                className="btn btn-success fs-modal-btn"
                onClick={this.handleClick}
              >
                Create {singularName.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
