import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import NotesReducer from './notes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: errorsReducer,
  notes: NotesReducer
});

export default rootReducer;