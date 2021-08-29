import React from 'react';
import NavPanel from '../NavPanel/NavPanel';
import s from './Header.module.scss';


const Header = (props) => {
    
    return <header className={s.header}>
    <NavPanel />
    </header>
}
export default Header;