// envUtils.js
function getEnvironment() {
  const currentURL = window.location.href;
  const development = 'http://localhost:5000';
  const production = 'learn-stocks-7vwtdjsx2-lusons-projects.vercel.app';
  if (currentURL.includes('localhost')) {
    return development;
  } else {
    return production;
  }
}

export default getEnvironment;
