import { deleteNote } from '../actions/note_actions';
import { deleteNotebook } from '../actions/notebook_actions';
import { deleteTag } from '../actions/tag_actions';

export const deleteModalSelector = ownProps => {
  let deleteAction;
  let titleType;
  if (ownProps.deleteEntityType === 'notes') {
    deleteAction = deleteNote;
    titleType = "NOTE";
  } else if (ownProps.deleteEntityType === 'notebooks') {
    deleteAction = deleteNotebook;
    titleType = 'NOTEBOOK';
  } else {
    deleteAction = deleteTag;
    titleType = 'TAG';
  }
  return { deleteAction, titleType };
};

