import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import s from './style.module.css'

export default function() {

  return (
    <button className={s.btn_edit}>
      <FontAwesomeIcon icon={faPenNib} />
    </button>
  )
}