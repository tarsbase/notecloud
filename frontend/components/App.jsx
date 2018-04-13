import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import NotesContainer from './notes/notes_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/notes" component={NotesContainer}/>
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
