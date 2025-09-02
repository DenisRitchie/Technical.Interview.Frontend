import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import RemoteListPage from './RemoteListPage'

const mockData = [
  { id: '1', name: 'Elemento 1', avatar: 'https://example.com/a1.png' },
  { id: '2', name: 'Elemento 2' }
]

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => mockData,
  } as any)
})

afterEach(() => {
  vi.restoreAllMocks()
})

function setup() {
  const router = createMemoryRouter([{ path: '/listado', element: <RemoteListPage /> }], { initialEntries: ['/listado'] })
  render(<RouterProvider router={router} />)
}

test('muestra loading y luego los elementos', async () => {
  setup()
  expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
  await waitFor(() => expect(screen.queryByText(/Cargando/i)).not.toBeInTheDocument())
  expect(screen.getByText('Elemento 1')).toBeInTheDocument()
  expect(screen.getByText('Elemento 2')).toBeInTheDocument()
})
