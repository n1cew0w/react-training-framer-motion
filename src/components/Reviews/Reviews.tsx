import React from 'react';
import styles from './Reviews.module.css'
import review from './assets/“.png'

import avatar2 from './assets/Image (1).png'
import avatar1 from './assets/Image.png'
import avatar3 from './assets/Image (2).png'

import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'
import logo4 from './assets/logo4.png'
import {motion} from "framer-motion";
import Button from "../Button/Button";

const Reviews = () => {
    return (
        <div>
            <div className={styles.reviewWrapper}>
                <motion.p
                    initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{ease: 'backInOut', duration: 1.0}}
                    className={styles.reviewText}>
                    What people are saying about us
                </motion.p>
                <motion.p
                    initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{ease: 'backInOut', duration: 1.2}}
                    className={styles.reviewDesc}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </motion.p>
            </div>
            <div className={styles.cards}>
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    whileHover={{scale: 1.03}}
                    transition={{ease: 'easeOut', duration: 1}}
                    className={styles.cardReview}
                >
                    <img className={styles.cardImg} src={review} alt=""/>
                    <p className={styles.cardText}>
                        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                    <div className={styles.cardHuman}>
                        <img className={styles.humanImg} src={avatar1} alt=""/>
                        <div className={styles.humanText}>
                            <p className={styles.humanName}>
                                Herman Jensen
                            </p>
                            <p className={styles.humanJob}>
                                Founder & Leader
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    whileHover={{scale: 1.03}}
                    transition={{ease: 'easeOut', duration: 1.3}}
                    className={styles.cardReview}
                >
                    <img className={styles.cardImg} src={review} alt=""/>
                    <p className={styles.cardText}>
                        Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className={styles.cardHumanMark}>
                        <img className={styles.humanImg} src={avatar2} alt=""/>
                        <div className={styles.humanText}>
                            <p className={styles.humanName}>
                                Steve Mark
                            </p>
                            <p className={styles.humanJob}>
                                Founder & Leader
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    whileHover={{scale: 1.03}}
                    transition={{ease: 'easeOut', duration: 1.6}}
                    className={styles.cardReview}
                >
                    <img className={styles.cardImg} src={review} alt=""/>
                    <p className={styles.cardText}>
                        It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className={styles.cardHuman}>
                        <img className={styles.humanImg} src={avatar3} alt=""/>
                        <div className={styles.humanText}>
                            <p className={styles.humanName}>
                                Kenn Gallagher
                            </p>
                            <p className={styles.humanJob}>
                                Founder & Leader
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{ease: 'backInOut', duration: 1.2}}
                className={styles.sponsors}
            >
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img className={styles.coinbase} src={logo3} alt=""/>
                <img src={logo4} alt=""/>
            </motion.div>
            <motion.div
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{ease: 'backInOut', duration: 1.2}}
                className={styles.banner}>
                <div>
                    <p className={styles.bannerText}>
                        Let’s try our service now!
                    </p>
                    <p className={styles.bannerDesc}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
                <div className={styles.bannerBtn}>
                    <Button buttonText={'Get Started'}/>
                </div>

            </motion.div>
        </div>
    );
};

export default Reviews;