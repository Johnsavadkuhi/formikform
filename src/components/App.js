import React from 'react';
import Auth from './Auth';
import ErrorBoundary from './Error';

function App() {

  return <ErrorBoundary>
    <Auth />
  </ErrorBoundary>
}

export default App;
