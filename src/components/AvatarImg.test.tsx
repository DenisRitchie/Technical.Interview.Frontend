import { render, screen, fireEvent } from '@testing-library/react'
import AvatarImg from './AvatarImg'

test('muestra fallback cuando hay error al cargar', () => {
  render(<AvatarImg src="https://invalid.domain/x.png" alt="Alice" />)
  const img = screen.getByRole('img', { name: 'Alice' }) as HTMLImageElement
  // Disparar error
  fireEvent.error(img)
  // Debe cambiar a data URI
  expect(img.src.startsWith('data:image/svg+xml')).toBe(true)
})
