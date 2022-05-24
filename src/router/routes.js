import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

export default [
    {
      path: '/',
      redirect: '/news'
    },
    {
      // path: url 주소
      path: '/news',
      // component: url 주소로 왔을때 보질 화면
      component: NewsView
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]

  