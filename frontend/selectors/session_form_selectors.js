export const sessionFormSelector = (state, ownProps) => {
  let pageTitle;
  let linkTitle;
  let linkAdverb;
  let linkPath;
  let containerClass;
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
  if (ownProps.location.pathname === '/') {
    containerClass = 'main-form-container';
    pageTitle = 'Sign up for free!';
  } else {
    containerClass = 'session-form-page';
  }
  const loggedIn = Boolean(state.session.errors);
  const errors = state.session.errors;
  return { pageTitle, linkTitle, linkAdverb, containerClass, linkPath, loggedIn, errors };
};