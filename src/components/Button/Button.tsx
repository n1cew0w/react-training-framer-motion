import React from 'react';
import styles from "./Button.module.css";
import {motion} from "framer-motion";
const Button = ({buttonText}) => {
    return (
        <>
            <motion.button
                initial={{scale: 1}}
                whileHover={{scale: 1.07}}
                transition={{ease: 'easeOut', duration: 1}}
                className={styles.button}>
                <a href="#" className={styles.buttonText}>{buttonText}</a>
            </motion.button>
        </>
    );
};

export default Button;