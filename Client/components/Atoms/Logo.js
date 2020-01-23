import React, { Component } from 'react';
import styles from './Logo.module.css';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const size = this.props.size;
        return (
            <div className={styles.wrap}>
                <a className={styles.logo}>
                    <img src="/images/owleague-square.png" className={styles[size]} alt=""/>
                </a>
            </div>
         );
    }
}
 
export default Logo;