import React from  'react';
import s from './SelectDimForm.module.scss';


const SelectDimForm = ({onSelectDimension}) => {
    return (
    <select className={s.form} aria-label="Default select example" onChange={onSelectDimension}>
        <option selected>select dimension</option>
        <option value="dimension 5-126">dimension 5-126</option>
        <option value="dimension c-137">dimension C-137</option>
        <option value="replacement dimension">replacement dimension</option>
        <option value="unknown">unknown</option>
        <option value=" ">all</option>
    </select>)
}

export default SelectDimForm ;