import React from 'react';
import styles from './Advantages.module.css'
import star from './icons/iconStar.png'
import armor from './icons/iconArmor.png'
import transfer from './icons/iconTransfer.png'
import {motion} from "framer-motion";
import Button from "../Button/Button";

const Advantages = () => {
    return (
        <div className={styles.advantageWrapper}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ease: 'backInOut', duration: 1}}
            >
                <div className={styles.advantageText}>
                    You do the business, we’ll handle the money.
                </div>
                <p className={styles.advantageDesc}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards
                    and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button buttonText={'Get Started'}/>
            </motion.div>
            <div className={styles.advantageRight}>
                <div className={styles.cards}>
                    <motion.div
                        initial={{x: 700}}
                        whileInView={{x: 0}}
                        whileHover={{scale: 1.03}}
                        transition={{ease: 'easeOut', duration: 1}}
                        className={styles.card}>
                        <div className={styles.cardImg}>
                            <img src={star} alt=""/>
                        </div>
                        <div className={styles.cardText}>
                            <p className={styles.cardHeadText}>
                                Rewards
                            </p>
                            <p className={styles.cardDescText}>
                                The best credit cards offer some tantalizing combinations of promotions and prizes
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{x: 700}}
                        whileInView={{x: 0}}
                        whileHover={{scale: 1.03}}
                        transition={{ease: 'easeOut', duration: 1.2}}
                        className={styles.card}>
                        <div className={styles.cardImg}>
                            <img src={armor} alt=""/>
                        </div>
                        <div className={styles.cardText}>
                            <p className={styles.cardHeadText}>
                                100% Secured
                            </p>
                            <p className={styles.cardDescText}>
                                We take proactive steps make sure your information and transactions are secure.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{x: 700}}
                        whileInView={{x: 0}}
                        whileHover={{scale: 1.03}}
                        transition={{ease: 'easeOut', duration: 1.4}}
                        className={styles.card}>
                        <div className={styles.cardImg}>
                            <img src={transfer} alt=""/>
                        </div>
                        <div className={styles.cardText}>
                            <p className={styles.cardHeadText}>
                                Balance Transfer
                            </p>
                            <p className={styles.cardDescText}>
                                A balance transfer credit card can save you a lot of money in interest charges.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Advantages;