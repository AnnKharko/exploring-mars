import React from 'react';
import styles from './BaseLayout.module.css';
import {Link} from "react-router-dom";

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
            </header>
            <main>{children}</main>
            <footer>Footer Data</footer>
        </div>
    )
};
