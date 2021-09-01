import React from  'react';
import s from './SelectSpeciesForm.module.scss';


const SelectSpeciesForm = ({onSelectSpecies}) => {
    return (
    <select class="form-select-sm" aria-label="Default select example" className={s.form} onChange={onSelectSpecies} >
        <option selected>select species</option>
        <option value="human">Human</option>
        <option value="alien">alien</option>
        <option value="humanoid">humanoid</option>
        <option value="Poopybutthole">poopybutholl</option>
        <option value="mythological creature">mythological creature</option>
        <option value="unknown">unknown</option>
        <option value=" ">all</option>
    </select>)
}

export default SelectSpeciesForm ;