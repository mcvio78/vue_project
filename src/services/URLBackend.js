import env from '../../env';
const NODE_ENV = process.env.NODE_ENV;

const httpProtocol = env[NODE_ENV].url.frontEnd.httpProtocol;
const serverDomain = env[NODE_ENV].url.frontEnd.serverDomain;
const URLBackend = `${httpProtocol}${serverDomain}`;

export { URLBackend };
