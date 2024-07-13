// envUtils.js
function getEnvironment() {
  const currentURL = window.location.href;
  const development = 'http://localhost:5000';
  const production = 'https://learn-stocks.onrender.com';
  const nitjServer = '';
  if (currentURL.includes('localhosp')) {
    return development;
  } else {
    return production;
  }
}

export default getEnvironment;
