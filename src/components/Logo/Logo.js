import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';
import {NavLink} from 'react-router-dom';

const logo = (props) => (
    <NavLink to="/" exact className={classes.Logo}>
        <img src={burgerLogo} alt="burger builder"/>
    </NavLink>
);

export default logo;