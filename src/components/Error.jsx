import style from '@/components/Error.module.css'

export default function Error() {
  return(
    <div className={style.error}>
      <div className={style.error_text}>
        <h1>Error Page</h1>
        <p>Maybe you did something wrong</p>
      </div>
    </div>
  )
}