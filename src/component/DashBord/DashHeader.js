import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import '../DashBord/styled.css';

function DashHeader({ handleMenuClick }){
    return(
        <header className="fixed z-50 w-full">
				<div className="logosec" onClick={handleMenuClick}>
					<FontAwesomeIcon icon={faBars} id="menuicn" className="icn menuicn" />
				</div>

				
				<div class="searchbar text-white font-semibold uppercase">
					logo
				</div>

				<div class="message">
					<FontAwesomeIcon icon={faBell} className="icn" />
					{/* <div class="dp">
						<div id="dot"></div>
						<FontAwesomeIcon icon={faCircleUser} className="dpicn" />
					</div> */}
				</div>

			</header>
    );
}
export default DashHeader