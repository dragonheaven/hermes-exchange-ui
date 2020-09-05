import React from 'react';

import Loader from '../Loader';

export default ({ isLoading, error }) => {
  if (isLoading) {
    // Handle the loading state
    return <Loader />;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  }

  return null;
};
