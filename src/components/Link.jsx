import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    return (
        <AnchorLink
            className={selectedPage === lowerCasePage ? 'selectedPage' : ''}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage)
                if(setIsMenuToggled) setIsMenuToggled(false)
            }}
        >
            {page}
        </AnchorLink>
    )
}
export default Link
