import React from "react";
import housecalls from "../../assets/img/housecall.png";
import { FaQuoteLeft } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import styles from "./Housecalls.module.css";

const Housecalls = () => {
    return (
        <div className={styles.housecallsContainer}>
            <div className={styles.textBox}>
                <div className={styles.boxItem}>
                    <FaQuoteLeft className={styles.quote} />
                    <div className={styles.icon}>
                        {<RiHome4Fill size={50} color={"#05299E"} />}
                    </div>
                    <h4>House Calls</h4>
                </div>
                <div className={styles.boxItem}>
                    <p>
                        Have us drive to you in the Fort Worth area. We also
                        conveniently offer Telemedicine consultations depending
                        on the need. Unfortunately, we currently do not accept
                        insurance for House Visits. Face masks are required for
                        all persons.​
                    </p>
                </div>
                <div className={styles.boxItem}>
                    <p>House visit pricing:</p>
                    <p>
                        $200 at time of visit includes FREE lab testing
                        (excluding covid testing)
                    </p>
                </div>
                <div className={styles.boxItem}>
                    <p>Contact us to learn more about corporate visits</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={housecalls} alt="" />
            </div>
        </div>
    );
};

export default Housecalls;
