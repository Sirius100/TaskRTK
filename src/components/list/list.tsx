import {useSelector} from 'react-redux'
import {RootState} from '../../store'

import BtnEdit from '../btn_manager_task/edit'
import Checkbox from '../btn_manager_task/complite'
import s from './style.module.css'

export default function() {
  const list_task = useSelector((state: RootState) => state.list_task.tasks)

  return (
    <ul className={s.ul_list_task}>
      {list_task.map( item => {
        return (
          <li key={item.id} className={s.ui_list_task_li}>
            <p>
              {item.title}
            </p>
            <div className={s.ui_list_task_li_div}>
              <BtnEdit key={item.id}/>
              <Checkbox/>
            </div>

          </li>
        )
      })}
    </ul>
  )
}