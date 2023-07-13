import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"


interface Task {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const enum Theme {
  Dark,
  Light
}

interface TemplateStore {
  tasks: Task[],
  id_task: number,
  edit_id: null | number
  theme: Theme 
}

const initialState: TemplateStore = {
  tasks: [],
  id_task: 0,
  edit_id:null,
  theme: Theme.Dark
}


export const tasks_theme_reduser = createSlice({
  name: "tasks-theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === Theme.Dark ?
      Theme.Light
      : Theme.Dark;
    },
    inrementId(state) {
      state.id_task += 1
    },
    completedTask(state, id) {
      state.tasks = state.tasks.map( item => {
        if(item.id === id.payload){
          item.completed = !item.completed
        }
        return item
      })
      return state
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter( item => item.id !== id.payload)
    },
    editID(state, id) {
      state.edit_id = id.payload
    },
    newTask(state, new_task) {
      if(!new_task.payload.valueInp) return
      state.tasks = state.tasks.map(
        item => {
          if(item.id === new_task.payload.edit_id){
            item.title = new_task.payload.valueInp
          }
          return item
        }
      )
      return state
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskId.fulfilled, (state, action:PayloadAction<Task>) => {
        state.tasks.unshift(action.payload)
      })
  }
})

export const fetchTaskId = createAsyncThunk(
  'tasks/fetchUserId',
  async (url:string, {rejectWithValue}) => {
    try{
      const response = await fetch(url)
      if(!response.ok){
        throw new Error('error Server!')
      }
      const data = await response.json()
      return data

    }catch(error) {
      if(error instanceof Error) 
        return rejectWithValue(error.message)
    }
  }
)



export const {
  changeTheme,
  inrementId,
  completedTask,
  deleteTask,
  editID,
  newTask,
} = tasks_theme_reduser.actions
export default tasks_theme_reduser.reducer