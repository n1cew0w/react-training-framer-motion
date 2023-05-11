import React from 'react';
import AchStyles from './Achievements.module.css'
const Achievements = () => {
    return (
        <div className={AchStyles.ach}>
            <div className={AchStyles.ach}>
                <p className={AchStyles.numbers}>3800+</p>
                <p className={AchStyles.text}>USER ACTIVE</p>
                <div className={AchStyles.line}/>
            </div>
            <div className={AchStyles.ach}>
                <p className={AchStyles.numbers}>230+</p>
                <p className={AchStyles.text}>TRUSTED BY COMPANY</p>
                <div className={AchStyles.line}/>
            </div>
            <div className={AchStyles.ach}>
                <p className={AchStyles.numbers}>$230M+</p>
                <p className={AchStyles.text}>TRANSACTION</p>

            </div>
        </div>
    );
};

export default Achievements;