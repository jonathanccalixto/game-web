import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChooseGame from 'pages/ChooseGame';
import Ludo from 'pages/Ludo';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ChooseGame} />
      <Route path="/ludo" component={Ludo} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
