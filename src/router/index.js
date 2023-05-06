import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/survey/welcome-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      {
      path: '/test/test-component',
      name: 'test-component',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/test/test-view.vue')
    },
    {
      path: '/test/toolbar-node',
      name: 'test-component-toolbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/test/ToolbarNode.vue')
    },
    {
        path: '/test/tooltip',
        name: 'test-component-tooltip',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/test/tooltip.vue')
    },
    //   {
    //   path: '/raw-data',
    //   name: 'rl-agent-data',
    //   component: HomeView
    // },
    // {
    //   path: '/feature-correlations',
    //   name: 'feature-correlations',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/FeatureCorrelationsView.vue')
    // },
    // {
    //   path: '/action-radar',
    //   name: 'action-radar',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ActionRadarView.vue')
    // },
    // {
    //   path: '/action-sequence',
    //   name: 'action-sequence',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ActionSequenceView.vue')
    // },
    //   {
    //   path: '/new-view',
    //   name: 'new-view',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/DashboardViewNew.vue')
    // },
    {
      path: '/survey/welcome',
      name: 'survey-welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/welcome-view.vue')
    },
    {
      path: '/survey/phase-one',
      name: 'survey-phase-one',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-one-view.vue')
    },
    {
      path: '/survey/phase-two-first',
      name: 'survey-phase-two-first',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-two-view1.vue')
    },
      {
      path: '/survey/phase-two-second',
      name: 'survey-phase-two-second',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-two-view2.vue')
    },
      {
      path: '/survey/phase-three',
      name: 'survey-phase-three',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-three-view.vue')
    },
      {
      path: '/survey/phase-three-first',
      name: 'survey-phase-three-first',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-three-view.vue')
    },
    {
      path: '/survey/phase-four',
      name: 'survey-phase-four',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-four-view.vue')
    },
      {
      path: '/survey/phase-five',
      name: 'survey-phase-five',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-five-view.vue')
    },
      {
      path: '/survey/phase-zero',
      name: 'survey-phase-zero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/phase-zero-view.vue')
    },
      {
      path: '/survey/thank-you',
      name: 'survey-thank-you',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/survey/thank-you.vue')
    }
  ]
})
export default router