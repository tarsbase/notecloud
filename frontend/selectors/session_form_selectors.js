export const sessionFormSelector = (state, ownProps) => {
  let pageTitle;
  let linkTitle;
  let linkAdverb;
  let linkPath;
  let linkMsg;
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
    linkMsg = 'Just checking it out?';
    linkTitle = 'Try our demo';
    linkPath = '/';
  } else {
    containerClass = 'session-form-page';
    linkMsg = `${linkAdverb} have an account?`;
  }
  const loggedIn = Boolean(state.session.errors);
  const errors = state.errors.session;
  return { pageTitle, linkTitle, linkMsg, containerClass, linkPath, loggedIn, errors };
};