import { BiPlusMedical } from "react-icons/bi";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <h1>Concierge</h1>
            <h2>
                Urgent
                <span className={styles.iconSpan}>
                    {<BiPlusMedical size={20} color={"white"} />}
                </span>
                Care
            </h2>
        </div>
    );
};

export default Logo;
