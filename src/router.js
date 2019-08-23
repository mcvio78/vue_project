import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList";
import EventShow from "./views/EventShow";
import EventCreate from "./views/EventCreate";
import User from "./views/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/show",
      name: "event-show",
      component: EventShow
    },
    {
      path: "/create",
      name: "create-event",
      component: EventCreate
    },
    {
      path: "/user/:username",
      name: "user",
      component: User,
      props: true
    }
  ]
});
