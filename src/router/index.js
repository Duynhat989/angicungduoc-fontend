import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/web/Home.vue'
import JobView from '../views/web/Job.vue'
import CourseView from '../views/web/Course.vue'
import Message from '../views/web/msg.vue'
import Person from '../views/web/Person.vue'
import Resources from '../views/web/Resources.vue'
import Register from '../views/web/Register.vue'

import FoodsIndex from '@/views/web/foods/index.vue'
import FoodsShow from '@/views/web/foods/show.vue'

import Login from '../views/auth/Login.vue'
import Scamer from '../views/web/Scamer.vue'
import NotFoundComponent from '../views/web/NotFoundComponent.vue'
import ProjectResult from '../views/web/ProjectResult.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodsIndex
    },
    {
      path: '/me',
      name: 'me',
      component: Person
    },{
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }, 
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/job',
      name: 'job',
      component: JobView
    },{
      path: '/course',
      name: 'course',
      component: CourseView
    }, {
      path: '/course/view',
      name: 'course_view',
      component: ProjectResult
    },
    {
      path: '/scamer',
      name: 'scamer',
      component: Scamer
    },  
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundComponent
    } 
    // { 
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  console.log(loggedIn)
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router
