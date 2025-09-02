import reducer, { addTask } from './tasksSlice'

test('addTask agrega un elemento con descripción', () => {
  const state = { items: [] as {id: string, description: string}[] }
  const next = reducer(state, addTask('Hacer ejercicio'))
  expect(next.items.length).toBe(1)
  expect(next.items[0].description).toBe('Hacer ejercicio')
  expect(typeof next.items[0].id).toBe('string')
})
