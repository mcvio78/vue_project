import axios from 'axios';

const env = require('../../env');
const NODE_ENV = process.env.NODE_ENV;

const httpProtocol = env[NODE_ENV].url.frontEnd.httpProtocol;
const serverDomain = env[NODE_ENV].url.frontEnd.serverDomain;
const baseUrl = `${httpProtocol}${serverDomain}`;

const apiClient = axios.create({
	baseURL: baseUrl,
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	getEvents(perPage, page) {
		return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
	},
	getEvent(id) {
		return apiClient.get(`/events/${id}`);
	},
	postEvent(event) {
		return apiClient.post('/events', event);
	}
};
