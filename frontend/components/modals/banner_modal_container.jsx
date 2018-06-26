import { connect } from 'react-redux';
import BannerModal from './banner_modal';
import { closeBannerModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  bannerModalIsOpen: state.ui.bannerModalIsOpen,
  msg: state.ui.bannerModalMsg
});

const mapDispatchToProps = dispatch => ({
  closeBannerModal: () => dispatch(closeBannerModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerModal);