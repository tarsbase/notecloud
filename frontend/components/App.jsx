import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotesContainer from './notes/notes_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/notes/:noteId?" component={NotesContainer}/>
      <AuthRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
