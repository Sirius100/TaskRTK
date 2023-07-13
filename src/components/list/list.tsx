import {useSelector} from 'react-redux'
import {RootState} from '../../store'

import BtnEdit from '../btn_manager_task/edit'
import Checkbox from '../btn_manager_task/complite'
import FormEdit from '../form_edit/edit_component'
import s from './style.module.css'

export default function() {
  const {tasks, edit_id} = useSelector((state: RootState) => state.list_task)
   

  let style_completed_false = `${s.ui_list_task_li}`
  let style_completed_true = `${s.ui_list_task_li} ${s.ui_list_task_li_completed}`
  return (
    <ul className={s.ul_list_task}>
      {tasks.map( item => {
        return (
          item.id === edit_id ? 
          <FormEdit key={edit_id}/>
           :
          <li key={item.id} className={ item.completed ? style_completed_true : style_completed_false}>
            <span className={s.ui_list_task_li_span_id}>
              {item.id}
            </span>
            <p className={s.ui_list_task_li_p}>
              {item.title}
            </p>
            <div className={s.ui_list_task_li_div}>
              <BtnEdit id={item.id}/>
              <Checkbox id={item.id} task_ready={item.completed}/>
            </div>
          </li>
        )
      })}
    </ul>
  )
}