import React from 'react';
import s from './Modal.module.scss';

const Modal = ({ person, visible, setVisible }) => {

    const rootClasses = [s.modal]
   
    if (visible) {
        rootClasses.push(s.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={s.modalContent} onClick={(e)=>e.stopPropagation()}>    
            <div className={s.infoBlock}>
                <div className={s.avaBlock}>    
                    <div><img src={person.image} style={{ width: '180px', height: '180px' }}/></div>
                </div>
                <div className={s.descriptionBlock}>                      
                <p><b>Id: </b>{person.id}</p>
                <p><b>Name: </b>{person.name}</p>
                <p><b>gender: </b>{person.gender}</p>
                <p><b>type: </b>{person.type || "1"}</p>
                <p><b>species: </b>{person.species}</p>
                <p><b>status: </b>{person.status}</p>
                <p><b>originName: </b>{person.originName}</p>
                <p><b>locationName: </b>{person.locationName}</p>
                <p><b>created: </b>{person.created}</p>
                <button className={s.button} onClick={()=>setVisible(false)} > Back to list</button>
                </div> 
                
            </div>     
            </div>
        </div>
    )
}

export default Modal;