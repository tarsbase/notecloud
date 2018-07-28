export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (searchTerm, searchEntity) => ({
  type: SET_SEARCH_TERM,
  searchTerm,
  searchEntity
});
