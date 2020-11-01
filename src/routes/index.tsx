import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChooseGame from 'pages/ChooseGame';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={ChooseGame} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
