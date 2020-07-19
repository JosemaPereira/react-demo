import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Users } from '../../components/Users';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { usersBindActions } from './actions';
import { usersReducer } from './reducer';
import { usersSaga } from './saga';
import * as usersSelectors from './selectors';

const mapStateToProps = state => ({
  list: usersSelectors.userListSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(usersBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'users', reducer: usersReducer });

const withSaga = injectSaga({ key: 'users', saga: usersSaga });

export const UsersContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Users);
