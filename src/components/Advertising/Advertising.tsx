import React from 'react';
import styles from './Advertising.module.css'
import paypal from './assets/paypal.png'
import transactions from './assets/transactions.png'
import appStore from './assets/Group 481724.png'
import googlePlay from './assets/Group 481725.png'
import {motion} from "framer-motion";

const Advertising = () => {
    return (
        <div>
            <div className={styles.advertWrapper}>
                <div>
                    <motion.img
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{ease: 'easeOut', duration: 1.5}}

                        className={styles.paypal} src={paypal} alt=""/>
                    <motion.img
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{ease: 'easeOut', duration: 1}}
                        className={styles.transactions} src={transactions} alt=""/>
                </div>
                <div className={styles.advertRight}>
                    <motion.div
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{ease: 'easeOut', duration: 1}}
                    >
                        <p className={styles.advertText}>
                            Easily control your billing & invoicing.
                        </p>
                        <p className={styles.advertDesc}>
                            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum
                            orci rhoncus aliporttitor integer platea placerat.
                        </p>
                        <motion.div
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            transition={{ease: 'easeOut', duration: 1.7}}
                            className={styles.images}
                        >
                            <img src={appStore} alt=""/>
                            <img src={googlePlay} alt=""/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Advertising;