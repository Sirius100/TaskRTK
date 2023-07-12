import s from './style.module.css'

export default function() {

  return (
    <>
      <input type="checkbox" className={s.checkbox_complited}/>
      <span className={s.span_delete}>&times;</span>
    </>
  )
}