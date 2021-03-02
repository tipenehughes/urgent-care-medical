import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import { RiHotelFill } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";
import housecalls from "../../assets/img/housecall.png";
import corporate from "../../assets/img/corporate.png";
import styles from "./Sections.module.css";

const Sections = ({ data, i }) => {
    const left = "calc(0% - 3rem)";
    const right = "calc(0% - 3rem)";
    return (
        <div className={styles.container}>
            <div
                className={styles.textBox}
                style={{ right: i === 0 && "7rem", left: i === 1 && "7rem" }}
            >
                <div className={styles.boxItem}>
                    <FaQuoteLeft className={styles.quote} />
                    <div className={styles.icon}>
                        {i === 0 ? (
                            <RiHome4Fill size={50} color={"#05299E"} />
                        ) : (
                            <RiHotelFill size={50} color={"#05299E"} />
                        )}
                    </div>
                    <h4>{data.title}</h4>
                </div>
                <div className={styles.boxItem}>
                    <p>{data.body}</p>
                </div>
                <div className={styles.boxItem}>
                    <p>{data.subTitle}</p>
                    <p>{data.subSection}</p>
                </div>
                <div className={styles.boxItem}>
                    <p>{data.contact}</p>
                </div>
            </div>
            <div
                className={styles.imgContainer}
                style={{ left: i === 0 && left, right: i === 1 && right }}
            >
                <img
                    className={styles.img}
                    style={{height: i === 0 && "100%"}}
                    src={i === 0 ? housecalls : corporate}
                    alt={`${data.title}`}
                />
            </div>
        </div>
    );
};

export default Sections;
