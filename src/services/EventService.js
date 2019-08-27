import axios from 'axios';
import { URLBackend } from '@/services/URLBackend';

console.log('URLBackend: ', URLBackend);

const apiClient = axios.create({
	baseURL: URLBackend,
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
