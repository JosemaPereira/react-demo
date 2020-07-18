import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Pokedex } from '../../components/Pokedex';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { pokedexBindActions } from './actions';
import { pokedexReducer } from './reducer';
import { pokedexSaga } from './saga';
import * as pokedexSelectors from './selectors';

const mapStateToProps = state => ({
  pokedex: pokedexSelectors.pokedexSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(pokedexBindActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'pokedex', reducer: pokedexReducer });

const withSaga = injectSaga({ key: 'pokedex', saga: pokedexSaga });

export const PokedexContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Pokedex);