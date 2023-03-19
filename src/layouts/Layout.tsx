import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/build-resume">Build Resume</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
