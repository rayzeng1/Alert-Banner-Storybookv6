import React from 'react';
import Alert from './stories/Alert';


export const App = () => {
  return (
    <Alert title="Warning" severity="warning" decorativeIcon>Something went wrong...please try again!</Alert>
  );
};

export default App;
