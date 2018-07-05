import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotesContainer from './notes/notes_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/notes/:noteId" component={NotesContainer} />
      <ProtectedRoute exact path="/notes" component={NotesContainer} />
      <ProtectedRoute exact path="/shortcuts" component={NotesContainer}/>
      <ProtectedRoute
        exact
        path="/notebooks/:notebookId/notes/:noteId"
        component={NotesContainer}
      />
      <ProtectedRoute
        exact
        path="/notebooks/:notebookId/notes"
        component={NotesContainer}
      />
      <ProtectedRoute exact path="/notebooks" component={NotesContainer} />
      <ProtectedRoute exact path="/tags" component={NotesContainer} />
      <ProtectedRoute
        exact
        path="/tags/:tagId/notes"
        component={NotesContainer}
      />
      <ProtectedRoute
        exact
        path="/tags/:tagId/notes/:noteId"
        component={NotesContainer}
      />
      <AuthRoute exact path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
