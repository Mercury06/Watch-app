import React from 'react';
import s from './Characters.module.scss';
import {NavLink} from 'react-router-dom'
import avaPhoto from './../../assets/images/ava-rez.jpg';

let Characteritem = ({ id, name, status, species, type, gender, originName, locationName, image, created, 
                       onItem, setModal, setSelectedId, ...props}) => {
              
    const onClickItem = () => {
        onItem ({id, name, status, species, type, gender, originName, locationName, image, created})
        setModal (true);
        setSelectedId (onItem);
    }
            
    //debugger;            
    return (
        <div className={s.item} onClick={onClickItem}>
        {/* onClick={onModalChange} */}
            
            <div className={s.avatar}>
               {<img src={image || avaPhoto} className={s.avaPhoto} />}
                    {/* <button onClick={onModalChange}> Modal </button> */}
            </div>    
                
    
        <div className={s.infoBlock}>
            <div><b>name:</b> {name}</div>
            <div><b>species:</b> {species}</div>
            <div><b>location:</b> {locationName}</div>
        </div>
        </div>
    )
}

export default Characteritem;