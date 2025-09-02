import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <h1>Reto: Tasks & Listado</h1>
      <p className="subtitle">React + TypeScript + Redux Toolkit + React Router</p>
      <div className="buttons">
        <button onClick={() => navigate('/tasks')} data-testid="to-tasks">Ir a Tasks</button>
        <button onClick={() => navigate('/listado')} data-testid="to-listado">Ir a Listado</button>
      </div>
      <p className="hint">Navega a cada sección; el estado de Redux se conserva al volver.</p>
    </div>
  )
}
