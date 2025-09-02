import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import TasksPage from './TasksPage'

function setup() {
  const router = createMemoryRouter([{ path: '/tasks', element: <TasksPage /> }], { initialEntries: ['/tasks'] })
  render(<Provider store={store}><RouterProvider router={router} /></Provider>)
}

test('muestra estado vacío y permite agregar via modal', async () => {
  setup()
  expect(screen.getByTestId('open-modal')).toBeInTheDocument()
  expect(screen.getByTestId('empty-state')).toBeInTheDocument()

  await userEvent.click(screen.getByTestId('open-modal'))
  const input = screen.getByLabelText('Descripción del task')
  await userEvent.type(input, 'Estudiar React{enter}')

  const list = await screen.findByTestId('task-list')
  expect(list).toBeInTheDocument()
  expect(list).toHaveTextContent('Estudiar React')
})

test('no agrega task en blanco', async () => {
  setup()
  await userEvent.click(screen.getByTestId('open-modal'))
  await userEvent.click(screen.getByTestId('submit-task'))
  // Modal sigue abierto porque no se envió nada
  expect(screen.getByText('Nuevo Task')).toBeInTheDocument()
})
