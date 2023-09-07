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
            <Link to="/counter">Event-Driven Programming</Link>
          </li>
          <li>
            <Link to="/reducer">State, Component Lifecycle</Link>
          </li>
          <li>
            <Link to="/refs">Refs</Link>
          </li>
          <li>
            <Link to="/imperative">Imperative React</Link>
          </li>
          <li>
            <Link to="/contexts">Contexts</Link>
          </li>
          <li>
            <Link to="/list">Component Lists</Link>
          </li>
          <li>
            <Link to="/performance">Performance</Link>
          </li>
          <li>
            <Link to="/hook">Writing Custom Hooks</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
