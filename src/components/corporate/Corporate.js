import React from "react";
import corporate from "../../assets/img/corporate.png";
import { FaQuoteLeft } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import styles from "./corporate.module.css";

const Corporate = () => {
    return (
        <div className={styles.corporateContainer}>
            <div className={styles.textBox}>
                <div className={styles.boxItem}>
                    <FaQuoteLeft className={styles.quote} />
                    <div className={styles.icon}>
                        {<RiHotelFill size={50} color={"#05299E"} />}
                    </div>
                    <h4>Corporate Visits</h4>
                </div>
                <div className={styles.boxItem}>
                    <p>Keep your team healthy to keep your business running.</p>
                    <p>
                        Have a dedicated provider on-site for scheduled hours.
                    </p>
                    <p>
                        Provide convenient urgent care services curated for your
                        team. ​
                    </p>
                </div>
                <div className={styles.boxItem}>
                    <p>Group lab testing available, including:</p>
                    <p>Rapid COVID-19 Tests & Antibody Tests </p>
                </div>
                <div className={styles.boxItem}>
                    <p>Contact us to learn more about corporate visits</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={corporate} alt="" />
            </div>
        </div>
    );
};

export default Corporate;
