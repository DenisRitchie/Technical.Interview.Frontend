import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '@/store/tasksSlice'
import TaskList from '@/components/TaskList'
import AddTaskModal from '@/components/AddTaskModal'
import { useNavigate } from 'react-router-dom'

export default function TasksPage() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCreate = (desc: string) => {
    dispatch(addTask(desc))
  }

  return (
    <div className="container">
      <h1>Tasks</h1>
      <div className="buttons">
        <button onClick={() => navigate('/')} data-testid="back-home">Volver</button>
        <button onClick={() => setOpen(true)} data-testid="open-modal">Agregar nuevo task</button>
      </div>
      <TaskList />
      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreate}
      />
    </div>
  )
}
