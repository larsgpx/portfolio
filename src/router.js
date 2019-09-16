import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home      
    },
    {
      path: "/portafolio",
      name: "portafolio",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Portfolio.vue")
    },
    {
      path: "/contacto",
      name: "contact",      
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/test",
      name: "test",      
      component: () =>
        import(/* webpackChunkName: "test" */ "./views/TestingFirebase.vue")
    },
    {
      path: "/login",
      name: "login",      
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Portafolio/Login.vue")
    }

  ]
});
