import { configureStore } from "@reduxjs/toolkit"
import reducerTask_Theme from '../components/slice_reducer'

export const store = configureStore({
  reducer: {
    list_task: reducerTask_Theme,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch