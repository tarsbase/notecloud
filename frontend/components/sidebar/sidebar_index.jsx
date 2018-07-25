import React from 'react';
import NotebookIndexItem from '../notebooks/notebook_index_item';
import TagIndexItem from '../tags/tag_index_item';
import ShortcutIndexItem from '../notes/shortcut_index_item';
import SearchForm from '../search/search_form';
import LoadingSpinnerContainer from '../spinners/loading_spinner_container';

export default class SidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, entityName: '', showTooltip: false };
    this.page = 1;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      (!this.props.modalIsOpen && nextProps.modalIsOpen) ||
      (this.props.searchTerm !== nextProps.searchTerm && nextProps.modalIsOpen)
    ) {
      console.log("TYPE", this.props.type);
      console.log("THIS SEARCH", this.props.searchTerm);
      console.log("NEXT SEARCH", nextProps.searchTerm);
      this.page = 1;
      nextProps.fetchAction(this.page, 'replace', nextProps.searchTerm);
    }
  }

  componentDidMount() {
    this.props.fetchAction(this.page, 'replace', this.props.searchTerm);
  }

  handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (
      bottom &&
      this.props.entityCount > this.props.entities.length &&
      !this.props.loadingSpinnerIsVisible
    ) {
      e.target.scrollTo(0, e.target.scrollHeight);
      this.fetchNextPage();
    }
  }

  fetchNextPage() {
    this.page += 1;
    this.props.fetchAction(this.page, 'concat', this.props.searchTerm);
  }

  openModal(e) {
    e.preventDefault();
    this.hideTooltip();
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
    if (!this.state.entityName) {
      this.props.openBannerModal('Title cannot be blank');
      return;
    }
    const entity = { name: this.state.entityName };
    this.props.createAction(entity);
    this.closeModal();
    this.setState({ entityName: '' });
  }

  handleChange() {
    return e => this.setState({ ['entityName']: e.target.value });
  }

  showTooltip() {
    this.timeout = setTimeout(() => {
      this.setState({ showTooltip: true });
    }, 500);
  }

  hideTooltip() {
    clearTimeout(this.timeout);
    this.setState({ showTooltip: false });
  }

  render() {
    const tooltipClasses = ['tooltip-text'];
    if (this.state.showTooltip) {
      tooltipClasses.push('show-tooltip');
    } else {
      tooltipClasses.push('hide-tooltip');
    }
    let entities;
    switch (this.props.type) {
      case 'notebooks':
        entities = this.props.entities.map(entity => (
          <NotebookIndexItem
            key={entity.id}
            notebook={entity}
            openDeleteModal={this.props.openDeleteModal}
            closeNotebooksModal={this.props.closeModal}
          />
        ));
        break;
      case 'tags':
        entities = this.props.entities.map(entity => (
          <TagIndexItem
            key={entity.id}
            tag={entity}
            openDeleteModal={this.props.openDeleteModal}
            closeTagsModal={this.props.closeModal}
          />
        ));
        break;
      case 'shortcuts':
        entities = this.props.entities.map(entity => (
          <ShortcutIndexItem
            key={entity.id}
            note={entity}
            closeShortcutsModal={this.props.closeModal}
            updateNote={this.props.updateNote}
          />
        ));
        break;
      default:
        break;
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
      <div className="sidebar-index" onScroll={this.handleScroll}>
        <div className="sidebar-header">
          <div className="sidebar-top-header">
            <h1>{this.props.type.toUpperCase()}</h1>
            {this.props.type !== 'shortcuts' && (<i
              className="fa fa-plus sidebar-plus"
              onClick={this.openModal}
              onMouseEnter={this.showTooltip}
              onMouseLeave={this.hideTooltip}
            />)}
            <div className={tooltipClasses.join(' ')}>
              Create a {this.props.type.slice(0, this.props.type.length - 1)}
            </div>
          </div>
          <SearchForm type={this.props.type} />
        </div>
        <ul className="sidebar-index-list">{entities}</ul>
        <LoadingSpinnerContainer />
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
