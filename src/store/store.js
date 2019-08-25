import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';
import * as user from '@/store/modules/user.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user
	},
	state: {
		categories: [
			'sustainability',
			'nature',
			'animal welfare',
			'housing',
			'education',
			'food',
			'community'
		],
		events: [],
		eventsTotal: 0,
		event: {}
	},
	mutations: {
		SET_EVENTS(state, events) {
			state.events = events;
		},
		ADD_EVENT(state, event) {
			state.events.push(event);
		},
		SET_EVENTS_TOTAL(state, eventsTotal) {
			state.eventsTotal = eventsTotal;
		},
		SET_EVENT(state, event) {
			state.event = event
		}
	},
	actions: {
		fetchEvents({ commit }, { perPage, page }) {
			EventService.getEvents(perPage, page)
				.then(response => {
					commit(
						'SET_EVENTS_TOTAL',
						parseInt(response.headers['x-total-count'])
					);
					commit('SET_EVENTS', response.data);
				})
				.catch(error => {
					console.log('There was an error:', error.response);
				});
		},
		createEvent({ commit }, event) {
			return EventService.postEvent(event).then(() => {
				commit('ADD_EVENT', event.data);
			});
		},
		fetchEvent({ commit, getters }, id) {  // Send in the getters
			let event = getters.getEventById(id) // See if we already have this event

			if (event) { // If we do, set the event
				commit('SET_EVENT', event)
			} else {  // If not, get it with the API.
				EventService.getEvent(id)
				.then(response => {
					commit('SET_EVENT', response.data)
				})
				.catch(error => {
					console.log('There was an error:', error.response)
				})
			}
		}
	},
	getters: {
		getEventById: state => id => {
			return state.events.find(event => event.id === id);
		}
	}
});
