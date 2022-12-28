import { useRoutes, Navigate } from 'react-router-dom'
import { getAccessToken } from '../utils'
import { Auth, Todo } from '../pages'

const AppRoutes = () => {
  const token = getAccessToken()

  const routes = useRoutes([
    {
      path: '/',
      element: token ? <Navigate replace to="/todo" /> : <Auth />,
    },
    {
      path: '/todo',
      element: token ? <Todo /> : <Navigate replace to="/" />,
    },
  ])
  return routes
}

export default AppRoutes
