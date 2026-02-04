import {Link, useLocation} from "react-router-dom";

const navItems = [
  {path: "/salary-after-tax", label: "연봉 실수령액"},
  {path: "/salary-raise", label: "연봉 인상률"},
  {path: "/rent-vs-deposit", label: "전세 vs 월세"},
  {path: "/time-zone-overlap", label: "Time Zone Overlap"},
];

function Nav() {
  const location = useLocation();

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link to={item.path} className={`nav-link ${isActive ? "is-active" : ""}`}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
