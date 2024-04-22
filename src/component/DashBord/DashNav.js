import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faNewspaper, faClipboard, faAddressCard, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function DashNav({ isNavClosed }) {
    const location = useLocation();

    return (
        <div className={`navcontainer relative ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
                <ul className="nav-upper-options fixed">
                    <Link to="/dashboard">
                        <li className={`nav-option option ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faBorderAll} className="icn" />Dashboard
                        </li>
                    </Link>
                    <Link to="/event">
                        <li className={`nav-option option ${location.pathname === '/event' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faNewspaper} className="icn" />Events
                        </li>
                    </Link>
                    <Link to="/news">
                        <li className={`nav-option option ${location.pathname === '/news' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faClipboard} className="icn" />News
                        </li>
                    </Link>
                    <Link to="/company">
                        <li className={`nav-option option ${location.pathname === '/company' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faAddressCard} className="icn" />Companys
                        </li>
                    </Link>
                    <Link to="/supplier">
                        <li className={`nav-option option ${location.pathname === '/supplier' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faGear} className="icn" />Supplier
                        </li>
                    </Link>
                    <Link to="/">
                        <li className={`nav-option option ${location.pathname === '/' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="icn" />Logout
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
export default DashNav;
