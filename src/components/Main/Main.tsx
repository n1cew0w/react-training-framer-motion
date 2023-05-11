import banner from './assets/banner.png'
import card1 from './assets/1slide.png'
import card2 from './assets/2slide.png'
import card3 from './assets/3slide.png'
import robotHand from './assets/robot-hand-background-presenting-technology-gesture 1.png'
import sphere from './assets/Vector.png'
import mainStyles from '../Advertising/assets/Main.module.css'

import {motion} from "framer-motion"

const Main = () => {
    return (
        <div className={mainStyles.container}>
            <div className={mainStyles.wrapper}>
                <div className={mainStyles.hero}>
                    <div className={mainStyles.mainLeft}>
                        <motion.img
                            initial={{y: -500}}
                            animate={{y: 0}}
                            transition={{ease: 'easeOut', duration: 1}}

                            src={banner} alt=""
                        />
                        <motion.p
                            initial={{x: -500}}
                            animate={{x: 0}}
                            transition={{ease: 'easeOut', duration: 1}}
                            className={mainStyles.mainText}>The Next <span>Generation</span> Payment Method.
                        </motion.p>
                        <motion.p
                            initial={{y: 500}}
                            animate={{y: 0}}
                            transition={{ease: 'easeOut', duration: 1}}

                            className={mainStyles.desc}>Our team of experts uses a methodology to identify the credit
                            cards most likely to fit your needs.
                            We examine annual percentage rates, annual fees.
                        </motion.p>
                    </div>
                    <div className={mainStyles.mainRight}>
                        <motion.img
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{ease: 'easeOut', duration: 2}}
                            src={sphere} className={mainStyles.sphereTop} alt=""
                        />
                        <motion.img
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{ease: 'easeOut', duration: 1}}
                            src={sphere} className={mainStyles.sphereBot} alt=""
                        />
                        <motion.img
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{ease: 'easeOut', duration: 1.5}}
                            src={sphere} className={mainStyles.sphereRght} alt=""
                        />

                        <div className={mainStyles.cardsGradient}>
                            <div className={mainStyles.cards}>
                                <motion.img
                                    initial={{y: -100}}
                                    animate={{y: 0,}}
                                    transition={{ease: 'easeOut', duration: 2.3}}


                                    src={card3} className={mainStyles.card3} alt=""
                                />
                                <motion.img
                                    initial={{y: -200}}
                                    animate={{y: 0}}
                                    transition={{ease: 'easeOut', duration: 2}}

                                    src={card2} className={mainStyles.card2} alt=""
                                />
                                <motion.img
                                    initial={{y: -300}}
                                    animate={{y: 0}}
                                    transition={{ease: 'easeOut', duration: 1.7}}


                                    src={card1} className={mainStyles.card1} alt=""
                                />
                            </div>
                        </div>
                        <motion.img
                            initial={{x: 500}}
                            whileInView={{x: 0}}
                            transition={{ease: "easeOut", duration: 1.5}}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.5 },
                            }}

                            src={robotHand} alt="" className={mainStyles.robotHand}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;