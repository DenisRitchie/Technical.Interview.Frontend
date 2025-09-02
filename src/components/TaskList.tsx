import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

export default function TaskList() {
  const items = useSelector((s: RootState) => s.tasks.items)
  if (items.length === 0) {
    return <p data-testid="empty-state">Aún no hay tasks.</p>
  }
  return (
    <ul className="list" data-testid="task-list">
      {items.map(t => (
        <li key={t.id} className="list-item">
          <span>{t.description}</span>
        </li>
      ))}
    </ul>
  )
}
