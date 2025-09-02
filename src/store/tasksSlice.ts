import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

export interface Task {
  id: string
  description: string
}

export interface TasksState {
  items: Task[]
}

const initialState: TasksState = {
  items: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.items.push(action.payload)
      },
      prepare(description: string) {
        return { payload: { id: nanoid(), description } }
      }
    }
  }
})

export const { addTask } = tasksSlice.actions
export default tasksSlice.reducer
