import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavPanel.module.scss';

const NavPanel = () => {
return (

<nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/characters" activeClassName={s.activeLink}>Characters</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/episodes" activeClassName={s.activeLink}>Episodes</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/location" activeClassName={s.activeLink}>Location</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/mywatchlist" activeClassName={s.activeLink}>My watch list</NavLink>          
        </div>
           
      </nav>
      )};

export default NavPanel;
