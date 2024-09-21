import { createRouter, createWebHistory } from 'vue-router'

import BookListView from '../views/BookListView.vue'
import BookUpdateView from '../views/BookUpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'book-list-view',
      component: BookListView
    },
    {
      path: '/book/create',
      name: 'book-create-view',
      component: BookUpdateView
    },
    {
      path: '/book/update/:id',
      name: 'book-update-view',
      component: BookUpdateView
    }
  ]
})

export default router