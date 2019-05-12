import React from 'react';

import { Query } from 'react-apollo';

// Queries
import { AUTH_USER_QUERY } from '../queries/Authentication';

import RoutesGenerator from './RoutesGenerator';

const AppRouter = () => {
  const token = localStorage.getItem('token') || '';
  return (
    <Query query={AUTH_USER_QUERY} variables={{ token }}>
      {({ loading, error, data, refetch }) => {
        if (loading) return null;
        if (error) console.error(error);

        return <RoutesGenerator session={data.authUser} refetch={refetch} />;
      }}
    </Query>
  );
};
export default AppRouter;
