
import Button from "../Button/Button";
import styles from './FindCard.module.css'
import rightSide from './images.png'
import {motion} from "framer-motion";
const FindCard = () => {
    return (
        <div className={styles.findWrapper}>
            <div className={styles.findLeft}>
                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: 'easeOut', duration: 1}}
                    className={styles.findText}>
                    Find a better card deal in few easy steps.
                </motion.p>
                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: 'easeOut', duration: 1.3}}
                    className={styles.findDesc}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </motion.p>
                <Button buttonText={'Get Started'}/>
            </div>
            <motion.div
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{ease: 'easeOut', duration: 2}}
                className={styles.findRight}
            >
                <img src={rightSide} alt=""/>
            </motion.div>
        </div>
    );
};

export default FindCard;