import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const NavLink = (props) => (
    <Link {...props} className="
        text-xl font-bold text-gray-200 transition-colors 
        duration-100 transform hover:text-red-400" 
    />
);

const ExternalNavLink = (props) => (
    <a {...props} className="
        text-xl font-bold text-gray-200 transition-colors 
        duration-100 transform hover:text-red-400" 
    />
);

function Header(props) {

    const [open, setOpen] = useState(false);

    const menuClasses = (open ? 'flex' : 'hidden') + ' flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0';

    return (
    <header className="my-3">
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <StaticImage loading="eager" height={96} className="mr-5"  src="../images/banner.png" alt="The ChumJar" />
                <div className="flex md:hidden">
                    <button onClick={() => setOpen(open => !open)} type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                        aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className={menuClasses}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/rules">Server Rules</NavLink>
                <ExternalNavLink href="/discord">Discord</ExternalNavLink>
                <ExternalNavLink href="steam://connect/gs01.chumjar.net:28015">Play Now!</ExternalNavLink>
            </div>
        </nav>
    </header>
    )
}

export default Header;