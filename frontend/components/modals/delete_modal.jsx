import React from 'react';

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeDeleteModal();
  }

  handleDelete(e) {
    e.preventDefault();
    setTimeout(() => {
      this.props.history.push("/notes");
    }, 400);
    this.props.closeDeleteModal();
    this.props.deleteAction(this.props.deleteEntity.id);
  }

  render() {
    const { deleteEntity } = this.props;
    const title = deleteEntity ? deleteEntity.name || deleteEntity.title : '';
    const modalClasses = ['fs-modal'];
    if (this.props.deleteModalIsOpen) {
      modalClasses.push('show-fs-modal');
    } else {
      modalClasses.push('hide-fs-modal');
    }
    return (
      <div className={modalClasses.join(' ')}>
        <div className="fs-modal-content">
          <div className="fs-modal-header">
            <div className="fa fa-trash fa-2x" />
            <div>DELETE {this.props.titleType}</div>
          </div>
          <div className="delete-modal-warning">
            Are you sure you want to delete {title}?
            </div>
          <div className="fs-modal-btns">
            <div
              className="btn btn-cancel delete-modal-btn"
              onClick={this.closeModal}
            >
              Cancel
              </div>
            <div className="empty-space"></div>
            <div className="btn btn-success" onClick={this.handleDelete}>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}