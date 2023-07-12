import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"


interface Task {
  "userId": number,
  "id": number,
  "title": string,
  "completed": false
}

const enum Theme {
  Dark,
  Light
}

interface TemplateStore {
  tasks: Task[],
  id_task: number,
  theme: Theme 
}

const initialState: TemplateStore = {
  tasks: [],
  id_task: 0,
  theme: Theme.Dark
}


export const tasks_theme_reduser = createSlice({
  name: "tasks-theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === Theme.Dark ?
      Theme.Light
      : Theme.Dark
    },
    inrementId(state) {
      state.id_task += 1
    }
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

export const {changeTheme, inrementId} = tasks_theme_reduser.actions
export default tasks_theme_reduser.reducer