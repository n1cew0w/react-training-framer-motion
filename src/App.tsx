import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Achievements from "./components/Achievements/Achievements";
import Advantages from "./components/Advantages/Advantages";
import Advertising from "./components/Advertising/Advertising";
import FindCard from "./components/FindCard/FindCard";
import Reviews from "./components/Reviews/Reviews";
import styles from './App.css'
import {motion, useScroll, useSpring} from "framer-motion";

function App() {

    return (

        <div>
            <Header/>
            <Main/>
            <Achievements/>
            <Advantages/>
            <Advertising/>
            <FindCard/>
            <Reviews/>
        </div>
    )
}

export default App
