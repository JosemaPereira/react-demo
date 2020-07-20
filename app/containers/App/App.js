import React from 'react';
import { Switch, Route } from 'react-router';
import { PokedexContainer } from '../Pokedex';
import { UsersContainer } from '../Users';
import { Header } from '../../components/Header';
import { ProfileContainer } from '../Profile';
import { Error } from '../../components/Error';
import { Home } from '../../components/Home';

export const AppContainer = () => (
  <>
    <Header />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={PokedexContainer} />
        <Route exact path="/user" component={UsersContainer} />
        <Route
          exact
          path="/profile/:id"
          render={props => <ProfileContainer key={Date.now()} {...props} />}
        />
        <Route component={Error} />
      </Switch>
    </div>
  </>
);
