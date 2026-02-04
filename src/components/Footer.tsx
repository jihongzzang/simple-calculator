import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider" />

      <nav className="footer-nav">
        <span className="footer-label">Other calculators</span>

        <div className="footer-links">
          <Link to="/salary-after-tax">Salary After Tax</Link>
          <span>·</span>
          <Link to="/salary-raise">Salary Raise</Link>
          <span>·</span>
          <Link to="/rent-vs-deposit">Rent vs Deposit</Link>
          <span>·</span>
          <Link to="/time-zone-overlap">Time Zone Overlap</Link>
        </div>
      </nav>

      <p>© Simple Calculator</p>
    </footer>
  );
}

export default Footer;
