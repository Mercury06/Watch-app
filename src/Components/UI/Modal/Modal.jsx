import React from 'react';
import s from './Modal.module.scss';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [s.modal]
   
    if (visible) {
        rootClasses.push(s.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={s.modalContent}>
                <h1>TEXT_TEXT_TEXT</h1>
                {children}
            </div>
        </div>
    )
}

export default Modal;