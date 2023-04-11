import {useEffect, useState} from "react";
import './App.css';
import Navbar from "./scenes/navbar/Navbar";
import Home from "./scenes/home/Home";
import About from "./scenes/about/About";
import Projects from "./scenes/projects/Projects";
import Contact from "./scenes/contacts/Contact";

function App() {

    const [selectedPage, setSelectedPage] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setSelectedPage('home');
            } else if (window.scrollY === window.innerHeight) {
                setSelectedPage('about');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="App">
            <div className='app-container'>
                <Navbar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
