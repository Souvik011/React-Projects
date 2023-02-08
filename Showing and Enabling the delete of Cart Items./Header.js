import React from 'react';

import classes from './Header.module.css';
import mealImg from '../../IMG/Meals.jpg';
import HeaderCart from './HeaderCart';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCart onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt='Delicious Foods!'/>
            </div>
            
        </React.Fragment>
    );
};

export default Header;