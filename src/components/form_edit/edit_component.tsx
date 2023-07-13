import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../store'
import {AppDispatch} from '../../store'
import {newTask, editID} from '../slice_reducer'
import s from './style.module.css'

export default function() {
  const {edit_id} = useSelector((store:RootState) => store.list_task)
  const dispatch = useDispatch<AppDispatch>()
  const [valueInp, setValue] = useState('')

  const isSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(newTask({valueInp, edit_id}))
    setValue('')
    dispatch(editID(null))
  }
  
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <form className={s.form_edit} onSubmit={isSubmit}>
        <input
          type="text"
          className={s.form_edit_input}
          onChange={changeInput}
          autoFocus
        />
        <button
          type="submit"
          className={s.form_edit_btn}
        >
          Save
        </button>
      </form>
    </div>


  )
}