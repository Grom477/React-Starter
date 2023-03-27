import React from "react";

function Header() {
    // const nav = ['Home', 'About', 'Contact', 'Portfolies']; 
    const nav = [<li><a className="header__nav-list" href="#">Home</a></li>, <li><a className="header__nav-list" id="nav__content" href="#">About</a></li>, <li><a className="header__nav-list" href="#">Contact</a></li>, <li><a className="header__nav-list" href="#">Portfolios</a></li>, <li ><a className="header__nav-list" href="#">Journey</a></li>, <li><a className="header__nav-list" href="#">Blog</a></li>];
    return(
        <>
            <div className="header">
                <ul className="header__nav">   
                     {/* {nav.map((e, i) => <>
                        <li key={i}>{e}</li>
                    </>)}   */}
                    {nav}
                </ul>
            </div>
        </>
    );
}

export default Header
