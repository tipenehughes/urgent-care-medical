import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Logo />
            <div className={styles.navFlexItem}>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="">COVID-19 Testing</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Insurance</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li className={styles.navBtn}>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
