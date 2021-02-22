import React from "react";
import styles from "./Insurance.module.css";

const Insurance = () => {
    return (
        <div className={styles.insuranceContainer}>
            <div className={styles.insuranceBackground}>
                <div className={styles.insuranceHeader}>
                    <h3>Insurance</h3>
                </div>
                <div className={styles.insuranceBox}>
                    <div className={styles.flexItem}>
                        <div className={styles.icon}></div>
                        <div className={styles.subheader}></div>
                        <div className={styles.listFlex}>
                            <div className={styles.list}></div>
                            <div className={styles.list}></div>
                        </div>
                    </div>
                    <div className={styles.flexItem}>
                        <div className={styles.icon}></div>
                        <div className={styles.subheader}></div>
                        <div className={styles.listFlex}>
                            <div className={styles.list}></div>
                            <div className={styles.list}></div>
                        </div>
                    </div>
                    <div className={styles.contact}></div>
                </div>
            </div>
        </div>
    );
};

export default Insurance;
