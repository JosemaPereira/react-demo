import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Profile } from '../../components/Profile';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { profileBindActions } from './actions';
import { profileReducer } from './reducer';
import { profileSaga } from './saga';
import * as profileSelectors from './selectors';

const mapStateToProps = state => ({
  profile: profileSelectors.profileContentSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(profileBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'profile', reducer: profileReducer });

const withSaga = injectSaga({ key: 'profile', saga: profileSaga });

export const ProfileContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Profile);
