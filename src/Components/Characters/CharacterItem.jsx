import React from 'react';
import s from './Characters.module.scss';
import {NavLink} from 'react-router-dom'
import avaPhoto from './../../assets/images/ava-rez.jpg';

let Characteritem = ({character, ...props}) => {
              
              console.log(character)
            
                
    return (
        <div className={s.item}>
            
            <div className={s.avatar}>
               {<img src={character.image || avaPhoto} className={s.avaPhoto}/>}
            </div>    
                
    {/* //                 <NavLink to = {'/profile/' + u.id}> */}
    {/* //                 <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} /> */}
    {/* //                 </NavLink> */}
         
        <div className={s.infoBlock}>
            <div><b>name:</b> {character.name}</div>
            <div><b>species:</b> {character.species}</div>
            <div><b>location:</b> {character.location.name}</div>
        </div>
        </div>
    )
}

export default Characteritem;