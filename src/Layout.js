import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hook">Hook</Link>
          </li>
          <li>
            <Link to="/performance">Performance</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
