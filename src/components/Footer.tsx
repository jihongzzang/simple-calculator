function Footer() {
  return (
    <footer>
      <div className="footer-divider" />
      <div className="footer">
        <p style={{margin: 0}}>© {new Date().getFullYear()} simple-calculator</p>
        <p style={{marginTop: 8}}>This site provides simple calculators for reference purposes only.</p>
      </div>
    </footer>
  );
}

export default Footer;
