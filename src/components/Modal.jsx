import style from '@/components/Modal.module.css'
import { useState, useContext} from 'react'
import { ModalContext, ModalStatus } from '@/App'

export default function Modal() {
    const [visible, setVisible] = useContext(ModalContext)
    const [status, setStatus] = useContext(ModalStatus)

    function back() {
        setVisible(false)
    }

    async function confirmPhoto(event) {
        event.preventDefault()

        setVisible(false)
    }

    async function confirmInfo(event) {
        event.preventDefault()

        setVisible(false)
    }

  return (
    <>
        {!visible ? (
            <>
            </>
        ) : (
            <div className={style.modal}>
                {status == 'userAvatar' ? (
                    <div className={style.modalWindow}>
                        <h1>Avatar</h1>
                        <div className={style.mod_img}></div>
                        <form onSubmit={confirmPhoto} className={style.mod_form} action="">
                            <input className='file_btn' type="file" />
                            <input className={style.submit} type="submit" value='submit' />
                            <button onClick={back} className={style.mod_back_btn}>back</button>
                        </form>
                    </div>
                ) : (
                    <div className={style.modalWindow}>
                        <h1>Info</h1>
                        <form onSubmit={confirmInfo} className={style.mod_form} action="">
                            <label htmlFor="username">new username:</label>
                            <input type="text" name='username' />
                            <label htmlFor="email">new email:</label>
                            <input type="text" name='email' />
                            <label htmlFor="name">new name:</label>
                            <input type="text" name='name' />
                            <label htmlFor="phone_number">new phone number:</label>
                            <input type="text" name='phone_number' />
                            <input className={style.submit} type="submit" value='submit' />
                            <button onClick={back} className={style.mod_back_btn}>back</button>
                        </form>
                    </div>
                )}
            </div>
        )}
    </>
  )
}
