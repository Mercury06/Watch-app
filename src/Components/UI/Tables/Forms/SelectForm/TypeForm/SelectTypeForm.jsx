import React from  'react';
import s from './SelectTypeForm.module.scss'


const SelectTypeForm = ({onSelectType, onType}) => {
    return (
    <select className={s.form} onChange={onSelectType} >  
        <option selected>select type</option>
        <option value="cluster">Cluster</option>
        <option value="space station">Space station</option>
        <option value="planet">Planet</option>
        <option value="microverse">microverse</option>
        <option value="tv">TV</option>
        <option value="resort">resort</option>
        <option value="fantasy town">Fantasy town</option>
        <option value="dream">Dream</option>
        <option value=" ">all</option>
    </select>)
}

export default SelectTypeForm ;