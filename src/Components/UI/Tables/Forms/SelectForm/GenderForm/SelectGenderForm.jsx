import React from  'react';
import s from './SelectGenderForm.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectGenderForm = ({onSelectGender}) => {
    return (
    <select class="form-select-sm" aria-label="Default select example" className={s.form} onChange={onSelectGender}>
        <option selected>select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">unknown</option>
        <option value=" ">all</option>
    </select>)
}

export default SelectGenderForm ;