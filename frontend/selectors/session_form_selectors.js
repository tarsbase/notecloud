export const sessionFormSelector = (state, ownProps) => {
  let pageTitle;
  let linkTitle;
  let linkAdverb;
  let linkPath;
  if (ownProps.location.pathname === '/login') {
    pageTitle = 'Sign In';
    linkTitle = 'Create Account';
    linkAdverb = "Don't";
    linkPath = '/signup';
  } else {
    pageTitle = 'Create Account';
    linkTitle = 'Sign In';
    linkAdverb = 'Already';
    linkPath = '/login';
  }
  const loggedIn = Boolean(state.session.errors);
  const errors = state.session.errors;
  return { pageTitle, linkTitle, linkAdverb, linkPath, loggedIn, errors };
};