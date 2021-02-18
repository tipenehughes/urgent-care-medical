import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import doctor from "../../assets/img/doctor.jpg";
import styles from "../Landing/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.landingFlexItem}>
                <h2 className={styles.landingHeader}>
                    Direct Pediatric and <br /> Adult Urgent Care
                    <br /> Services
                </h2>
                <p className={styles.landingText}>8am to 8pm - 7 days a week</p>
                <div className={styles.landingBtnContainer}>
                    <button className={styles.landingBtn}>Appointments</button>
                    <a href="#" className={styles.landingBtn}>
                        Pay a Bill
                    </a>
                </div>
            </div>
            <div className={styles.landingFlexItem}>
                <div className={styles.landingNametag}>
                    <FaQuoteLeft className={styles.quote} />
                    <p>Dr. Michael C. Cowan, D.O</p>
                </div>
                <img
                    className={styles.landingImg}
                    src={doctor}
                    alt="Dr. Michael C. Cowan, D.O"
                />
            </div>
        </div>
    );
};

export default Landing;
