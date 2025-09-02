import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import App from '@/App'
import TasksPage from '@/routes/TasksPage'
import RemoteListPage from '@/routes/RemoteListPage'

function setup(path: string = '/') {
  const router = createMemoryRouter([
    { path: '/', element: <App /> },
    { path: '/tasks', element: <TasksPage /> },
    { path: '/listado', element: <RemoteListPage /> },
  ], { initialEntries: [path] })
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

test('muestra botones de navegación en la pantalla principal', () => {
  setup('/')
  expect(screen.getByTestId('to-tasks')).toBeInTheDocument()
  expect(screen.getByTestId('to-listado')).toBeInTheDocument()
})
