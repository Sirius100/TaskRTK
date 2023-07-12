import {useDispatch} from 'react-redux'
import {AppDispatch} from '../../store'
import {completedTask, deleteTask} from '../slice_reducer'

import s from './style.module.css'

interface Checkbox {
  id: React.ReactNode
  task_ready: boolean
}

export default function({id, task_ready}: Checkbox) {

  const dispatch = useDispatch<AppDispatch>()

  const handleChecked = () => {
    dispatch(completedTask(id))
  }

  const handleDelete = () => {
    dispatch(deleteTask(id))
  }
   
  return (
    <>
      <input
        type="checkbox"
        checked={task_ready}
        className={s.checkbox_complited}
        onChange={handleChecked}
      />
      <span 
        className={s.span_delete}
        onClick={handleDelete}
        >
          &times;
      </span>
    </>
  )
}