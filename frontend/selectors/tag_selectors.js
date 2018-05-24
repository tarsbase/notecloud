export const getSortedTags = state => {
  return Object.values(state.tags).sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
};