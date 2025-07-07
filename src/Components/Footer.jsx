import "../css/Footer.css";

function Footer() { /* footer*/
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} BKYE. All rights reserved.</p>
      <p>Crafted with 💜 for movie lovers.</p>
    </footer>
  );
}

export default Footer;
