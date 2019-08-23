import Vue from 'vue';
import Router from 'vue-router';
import EventList from './views/EventList';
import EventShow from './views/EventShow';
import EventCreate from './views/EventCreate';
import Error_404 from './views/Error_404';
import BaseIcon from './components/BaseIcon.vue';

Vue.component('BaseIcon', BaseIcon);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'create-event',
      component: EventCreate
    },
    { path: '*', component: Error_404 }
  ]
});
