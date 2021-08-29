import React from  'react';
import s from './SelectStatusForm.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectStatusForm = ({onSelectStatus}) => {
    return (
    <select class="form-select-sm" aria-label="Default select example" className={s.form} onChange={onSelectStatus}> 
        <option selected>select status</option>
        <option value="alive">Alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
        <option value=" ">all</option>
    </select>)
}

export default SelectStatusForm ;