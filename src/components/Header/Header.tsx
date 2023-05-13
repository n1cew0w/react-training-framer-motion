
import logoIcon from './logo.png'
import headerStyles from './Header.module.css'
import Button from "../Button/Button";
const Header = () => {


    return (
        <div className={headerStyles.container}>
            <header className={headerStyles.wrapper}>
                <div className={headerStyles.header}>
                    <img src={logoIcon} className={headerStyles.logo} alt=""/>
                    <p className={headerStyles.logoTextFirst}>Hoo</p>
                    <p className={headerStyles.logoTextSecond}>Bank</p>
                    <div className={headerStyles.menu}>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Features</li>
                            <li>Solution</li>
                        </ul>
                    </div>
                    <div className={headerStyles.menuBtn}>
                        <Button buttonText={'Menu'}/>
                    </div>

                </div>


            </header>
        </div>
    );
};

export default Header;