import {useDispatch, useSelector } from 'react-redux'
import {RootState} from '../../store' 
import {AppDispatch} from '../../store'
import { useEffect } from 'react'
import {fetchTaskId, inrementId} from '../slice_reducer'
import s from './style.module.css'

export default function() {
  const id = useSelector( (state: RootState) => state.list_task.id_task)
  const dispatch = useDispatch<AppDispatch>()
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`

  const handleClick = () => {
    dispatch(inrementId())
  }

  useEffect( () => {
    dispatch(fetchTaskId(url))
  }, [id])

  return (
    <button
      className={s.btn_get_task}
      onClick={handleClick}
    >
      Get task
    </button>
  )
}