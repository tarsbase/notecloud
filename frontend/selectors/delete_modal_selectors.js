import { deleteNote } from '../actions/note_actions';
import { deleteNotebook } from '../actions/notebook_actions';
import { deleteTag } from '../actions/tag_actions';

export const getDeleteAction = ownProps => {
  let deleteAction;
  if (ownProps.deleteEntityType === 'notes') {
    deleteAction = deleteNote;
  } else if (ownProps.deleteEntityType === 'notebooks') {
    deleteAction = deleteNotebook;
  } else {
    deleteAction = deleteTag;
  }
  return deleteAction;
};
