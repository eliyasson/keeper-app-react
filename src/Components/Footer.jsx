import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
         <p>eliyas @ {currentYear} </p>
      </footer>
    )
}
export default Footer;