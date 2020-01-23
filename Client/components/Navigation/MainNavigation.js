import React, { Component } from 'react';
import styles from './Navigation.module.css';

class MainNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div className={styles.wrap}>
                <a className={styles.item}>News</a>
                <a className={styles.item}>Teams</a>
                <a className={styles.item}>Standing</a>
            </div>
        );
    }
}

export default MainNavigation;