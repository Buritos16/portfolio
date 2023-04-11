import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    return (
        <AnchorLink
            className={selectedPage === lowerCasePage ? 'selectedPage' : ''}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
export default Link
