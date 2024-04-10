import { useState, useContext} from 'react'
import { ModalContext, ModalStatus } from '@/App'

export default function Modal() {
    const [visible, setVisible] = useContext(ModalContext)
    const [status, setStatus] = useContext(ModalStatus)
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
                    </div>
                ) : (
                    <div className='modalWindow userChangeInfo'>
                        <h1>Info</h1>
                    </div>
                )}
            </div>
        )}
    </>
  )
}
