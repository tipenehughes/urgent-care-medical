import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <h1>Concierge</h1>
            <h2>
                Urgent
                <span className={styles.iconSpan}>
                    {<BiPlusMedical className={styles.icon} />}
                </span>
                Care
            </h2>
        </div>
    );
};

export default Logo;
