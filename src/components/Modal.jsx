import { useState, useContext} from 'react'
import { ModalContext } from '../App'

export default function Modal() {
    const [visible, setVisible] = useContext(ModalContext)
  return (
    <>
        {!visible ? (
            <></>
        ) : (
            <div className={((visible)? 'modal active' : 'modal')}>
                <div className='modal-content'>

                </div>
            </div>
        )}
    </>
  )
}
