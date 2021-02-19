import { BiPlusMedical } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Covid.module.css";

const Covid = () => {
    return (
        <div className={styles.covidContainer}>
            <div className={styles.covidHeadline}>
                <h3>COVID-19 Testing</h3>
                <p>
                    Pay with insurance or our discounted self-pay rates. <br />
                    Same day results delivered via text within 2 hours. <br />
                    FDA authorized.
                </p>
            </div>
            <div className={styles.covidBox}>
                <div className={styles.box}>
                    <div className={styles.boxItem}>
                        <div className={styles.icon1}>
                            {<BiPlusMedical size={50} color={"#947BD3"} />}
                        </div>
                        <h4>RAPID COVID-19 PCR TESTS</h4>
                    </div>
                    <div className={styles.boxItem}>
                        <p>$300.00</p>
                        <p>per test</p>
                    </div>
                    <div className={styles.boxItem}>
                        <p>Make an appointment</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxItem}>
                        <div className={styles.icon2}>
                            <BiPlusMedical size={50} color={"#F0A7A0"} />
                        </div>
                        <h4>RAPID COVID-19 ANTIGEN TESTS</h4>
                    </div>
                    <div className={styles.boxItem}>
                        <p>$150.00</p>
                        <p>per test</p>
                    </div>
                    <div className={styles.boxItem}>
                        <p>Make an appointment</p>
                        <BsArrowRight />
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxItem}>
                        <div className={styles.icon3}>
                            <BiPlusMedical size={50} color={"#F26CA7"} />
                        </div>
                        <h4>ANTIBODY TESTS</h4>
                    </div>
                    <div className={styles.boxItem}>
                        <p>$125.00</p>
                        <p>per test</p>
                    </div>
                    <div className={styles.boxItem}>
                        <p>Make an appointment</p>
                    </div>
                </div>
            </div>
            <div className={styles.covidFooter}>
                <p>
                    Please note that PCR tests are self-pay only. Insurance not
                    accepted for PCR testing at this time. <br />
                    Walk-up testing without an appointment is available for an
                    additional $50 processing fee. ​
                </p>
            </div>
        </div>
    );
};

export default Covid;
