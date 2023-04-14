import React, {useState} from 'react'
import s from './Navbar.module.css'
import Link from "../../components/Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";


const Navbar = ({selectedPage, setSelectedPage}) => {

    const isAboveMobileScreens = useMediaQuery('(min-width: 1000px)')
    const [isMenuToggled, setIsMenuToggled] = useState(false)

    return (
        <nav>
            <div className={s.navbar}>
                <div className={s.navbarLine}>
                    <div className={s.logo}>
                        Buritos
                    </div>
                    {isAboveMobileScreens ? (
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
                    ) : (
                        <button
                            className={s.menuButton}
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className={s.menuIcon}/>
                        </button>
                    )}
                </div>
            </div>

            {!isAboveMobileScreens && isMenuToggled && (
                <div className={s.mobileNavbar}>
                    {/* CLOSE ICON */}
                    <div className={s.mobileClose}>
                        <button className={s.mobileCloseButton} onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className={s.mobileCloseIcon} />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className={s.mobileItems}>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            setIsMenuToggled={setIsMenuToggled}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            setIsMenuToggled={setIsMenuToggled}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            setIsMenuToggled={setIsMenuToggled}
                        />
                        <Link
                            page="Contacts"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            setIsMenuToggled={setIsMenuToggled}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar
