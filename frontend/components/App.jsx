import React from 'react';
import { Route } from 'react-router-dom';
import Main from './main/main';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <Main />
    <Route path='/login' component={SessionFormContainer}/>
    <Route path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
