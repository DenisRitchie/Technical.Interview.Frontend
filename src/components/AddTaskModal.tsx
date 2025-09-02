import React, { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (description: string) => void
}

export default function AddTaskModal({ open, onClose, onSubmit }: Props) {
  const [value, setValue] = useState('')
  if (!open) return null
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSubmit(trimmed)
    setValue('')
    onClose()
  }
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>Nuevo Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Descripción del task"
            placeholder="Descripción"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div className="modal-actions">
            <button type="submit" data-testid="submit-task">Guardar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
