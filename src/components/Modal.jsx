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
            <div className='modal'>
                {status == 'userAvatar' ? (
                    <div className='modalWindow userChangeAvatar'>
                        <h1>Avatar</h1>
                        <div className='mod_img'></div>
                        <form onSubmit={confirmPhoto} className="mod_form" action="">
                            <input type="file" />
                            <input type="submit" value='submit' />
                        </form>
                        <button onClick={back} className='mod_back_btn'>back</button>
                    </div>
                ) : (
                    <div className='modalWindow userChangeInfo'>
                        <h1>Info</h1>
                        <form onSubmit={confirmInfo} className="mod_form" action="">
                            <label htmlFor="username">new username:</label>
                            <input type="text" name='username' />
                            <label htmlFor="email">new email:</label>
                            <input type="text" name='email' />
                            <label htmlFor="name">new name:</label>
                            <input type="text" name='name' />
                            <label htmlFor="phone_number">new phone number:</label>
                            <input type="text" name='phone_number' />
                            <input type="submit" value='submit' />
                        </form>
                        <button onClick={back} className='mod_back_btn'>back</button>
                    </div>
                )}
            </div>
        )}
    </>
  )
}
