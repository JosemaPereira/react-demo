import { PokedexContainer } from '../../containers/Pokedex';
import { UsersContainer } from '../../containers/Users';
import React from 'react';
import { Switch, Route } from 'react-router';
import { Header } from '../../components/Header';

export const AppContainer = () => (
  <>
    <Header />
    <div className="content">
      <Switch>
        <Route exact path="/pokedex" component={PokedexContainer} />
        <Route exact path="/user" component={UsersContainer} />
      </Switch>
    </div>
  </>
);
