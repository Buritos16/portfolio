import React from 'react'
import s from './Navbar.module.css'
import Link from "../../components/Link";


const Navbar = ({ selectedPage, setSelectedPage }) => {
    return (
        <nav className={s.navbarContainer}>
            <div className={s.navbar}>
                <div className={s.navbarLine}>
                    <div className={s.logo}>
                        Buritos
                    </div>
                    <div className={s.navbarLineItem}>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contacts"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
