import React from 'react';
import SidebarIndexItem from './sidebar_index_item';
import NotebooksIndexContainer from '../notebooks/notebook_index_container';
import TagIndexContainer from '../tags/tag_index_container';

export default class SidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, entityName: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  closeModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ modalIsOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    const entity = {name: this.state.entityName};
    this.props.createAction(entity);
    this.closeModal();
  }

  handleChange() {
    return e => this.setState({['entityName']: e.target.value});
  }

  render() {
    const singularName = this.props.type
      .toUpperCase()
      .slice(0, this.props.type.length - 1);
    const modalClasses = ['fs-modal'];
    if (this.state.modalIsOpen) {
      modalClasses.push('show-fs-modal');
    } else {
      modalClasses.push('hide-fs-modal');
    }
    const entities = this.props.entities.map(entity => (
      <SidebarIndexItem
        key={entity.id}
        entity={entity}
        type={this.props.type}
      />
    ));
    return (
      <div className="sidebar-index">
        <div className="sidebar-header">
          <h1>{this.props.type.toUpperCase()}</h1>
          <i className="fa fa-plus sidebar-plus" onClick={this.openModal} />
        </div>
        {this.props.type === 'notebooks' && <NotebooksIndexContainer />}
        {this.props.type === 'tags' && <TagIndexContainer />}
        <div className={modalClasses.join(' ')}>
          <div className="fs-modal-content">
            <div className="fs-modal-header">
              <div className="fa fa-book fa-2x" />
              <div>CREATE {singularName}</div>
            </div>
            <input
              type="text"
              value={this.state.entityName}
              placeholder={`Title your ${singularName.toLowerCase()}`}
              onChange={this.handleChange()}
            />
            <div className="fs-modal-btns">
              <div
                className="btn btn-cancel delete-modal-btn"
                onClick={this.closeModal}
              >
                Cancel
              </div>
              <div className="empty-space" />
              <div className="btn btn-success" onClick={this.handleClick}>
                CREATE {singularName}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
