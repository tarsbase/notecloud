import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
