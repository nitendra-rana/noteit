import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Nitendra Rana {year}</p>
    </footer>
  );
}

export default Footer;
