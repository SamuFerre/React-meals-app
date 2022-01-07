/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from '../../../styles/Layout/Header.module.css';
import mealsImage from '../../../assets/meals.jpeg';

const Header = props => { 
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Meals Image"/>
            </div>
        </Fragment>
    );
};

export default Header;