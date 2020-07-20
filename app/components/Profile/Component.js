import React, { useEffect } from 'react';
import { Router, Link } from 'react-router-dom';
import { history } from '../../utils/history';

const Profile = ({ profile, actions: { getStartComponentSaga } }) => {
  useEffect(() => {
    getStartComponentSaga();
  }, []);
  return (
    <>
      <Router history={history}>
        <Link to="/user">Regresar al listado</Link>
      </Router>
      <h1>Acerca de</h1>
      {Object.keys(profile).length > 0 && (
        <>
          <div className="item profile">
            <img
              src={profile.data.avatar}
              alt={`${profile.data.first_name} ${profile.data.last_name}`}
            />
            <h2>{`${profile.data.first_name} ${profile.data.last_name}`}</h2>
            <h4>{profile.data.email}</h4>
          </div>
        </>
      )}
    </>
  );
};

export { Profile };
