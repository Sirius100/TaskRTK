import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../../store'
import {editID} from '../slice_reducer'
import s from './style.module.css'

type Child = {
  id: number
}

export default function({id}:Child) {

  const dispatch = useDispatch<AppDispatch>()
  
  const handleClickEdit = () => {
    dispatch(editID(id))
  }

  return (
    <button
      className={s.btn_edit}
      onClick = {handleClickEdit}
    >
      <FontAwesomeIcon icon={faPenNib} />
    </button>
  )
}