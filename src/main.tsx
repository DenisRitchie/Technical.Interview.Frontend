import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import TasksPage from './routes/TasksPage'
import RemoteListPage from './routes/RemoteListPage'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/tasks', element: <TasksPage /> },
  { path: '/listado', element: <RemoteListPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
