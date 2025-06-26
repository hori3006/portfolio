
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = () => {
  const location = useLocation();

  const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">メニュー</h2>
      <nav>
        <ul>
  <li className={location.pathname === "/" ? "active" : ""}>
    <Link to="/" onClick={handleScrollToTop}>トップ</Link>
  </li>
  <li className={location.pathname === "/max-tracker" ? "active" : ""}>
    <Link to="/max-tracker">筋トレMAX重量記録</Link>
  </li>
  <li className={location.pathname === "/salary-tracker" ? "active" : ""}>
    <Link to="/salary-tracker">バイト給料計算機</Link>
  </li>
</ul>

      </nav>
    </div>
  );
};

export default Sidebar;
