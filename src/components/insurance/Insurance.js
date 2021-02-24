import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./Insurance.module.css";

const Insurance = () => {
    return (
        <div className={styles.insuranceContainer}>
            <div className={styles.insuranceBackground}>
                <div className={styles.insuranceHeader}>
                    <h3>Insurance</h3>
                </div>
                <div className={styles.insuranceBox}>
                    <div className={styles.insuranceFlexContainer}>
                        <div className={styles.flexItem}>
                            <div className={styles.icon}>
                                <AiFillCheckCircle
                                    size={50}
                                    color={"#009B00"}
                                />
                            </div>
                            <div className={styles.subheader}>
                                <h4>
                                    We accept most major insurances, including:
                                </h4>
                            </div>
                            <div className={styles.listFlex}>
                                <div className={styles.list}>
                                    <ul>
                                        <li>Aetna</li>
                                        <li>BCBS</li>
                                        <li>Cigna</li>
                                        <li>Tricare</li>
                                    </ul>
                                </div>
                                <div className={styles.list}>
                                    <ul>
                                        <li>Ambetter</li>
                                        <li>Medicare</li>
                                        <li>United Healtcare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.flexItem}>
                            <div className={styles.icon}>
                                <AiFillCheckCircle
                                    size={50}
                                    color={"#009B00"}
                                />
                            </div>
                            <div className={styles.subheader}>
                                <h4>
                                    We accept most Medicaid plans, including:
                                </h4>
                            </div>
                            <div className={styles.listFlex}>
                                <div className={styles.list}>
                                    <ul>
                                        <li>Aetna Better Health</li>
                                        <li>Amerigroup</li>
                                        <li>
                                            Cook Children’s
                                            Medicaid/CHIPSuperior
                                        </li>
                                        <li>Tricare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <p>
                            Contact us to inquire further about our accepted
                            insurances
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insurance;
