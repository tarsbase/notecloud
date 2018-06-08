import { createTagging } from '../util/tagging_api_util';
import { receiveNote } from './note_actions';

export const tagNote = (tag, note) => dispatch =>
  createTagging(tag, note).then(res => dispatch(receiveNote(res)));