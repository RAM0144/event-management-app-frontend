
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

const CartLink = () => {

  const { bookings } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.account);
 
  if (userInfo.userType === "seller") {
    return "";
  }

  return <Link to="/cart" className="btn btn-outline-primary">
    <i className="fa-solid fa-book"></i>&nbsp;({bookings.length})
  </Link>
}

const Layout = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "account_logout" });
    navigate("/login")
  }

  return (
    <div className="App">
      <header className=" bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3" style={{ color: "red" }}>WEDDING.in</h1>
          <nav className="d-flex align-items-center">
            <div className="nav-link">Wedding Venues
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                <ul className="dropdown-menu">
                  <ul><li><a className="dropdown-item" href="/wedding-venue">Kalyana Mandapams</a></li></ul>
                  <ul><li><a className="dropdown-item" href="/wedding-resorts">Wedding Resorts</a></li></ul>
                  <ul><li><a className="dropdown-item" href="/hotels">Hotels</a></li></ul>
                </ul>
              </li>
            </div>

          </nav>

          <div className="nav-link">Wedding Vendors
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
              <ul className="dropdown-menu">
                <ul><li><a className="dropdown-item" href="/wedding-photos">Wedding Photographers</a></li></ul>
                <ul><li><a className="dropdown-item" href="/wedding-videos">Wedding Videography</a></li></ul>
                <ul><li><a className="dropdown-item" href="/wedding-caterers">Caterers</a></li></ul>
              </ul>
            </li>
          </div>

          <div className="nav-link">Brides
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
              <ul className="dropdown-menu">
                <ul><li><a className="dropdown-item" href="/mehndi-artists">Mehndi Artists</a></li></ul>
                <ul><li><a className="dropdown-item" href="/makeup-artists">Makeup Artists</a></li></ul>
                <ul><li><a className="dropdown-item" href="/jewellerys">Jewellery</a></li></ul>
              </ul>
            </li>
          </div>
        </div>
       <div style={{display: "flex", alignItems: "center", float: "left"}}>
       <CartLink />
        <i
              tabIndex={0}
              className="fa-solid fa-right-from-bracket fa-2x mx-3"
              onClick={handleLogout}
              style={{
                cursor: "pointer",
              }}
            ></i>
       </div>
        <div >
        </div>
      </header>
      <Outlet />
      <div>
        <h1 className="mt-5" style={{ fontFamily: "inherit", objectFit: "contain" }}>Enjoy planning your wedding</h1>
        <p>Plan your wedding with Wedding.in free wedding planning tools that let
          <br /> you manage your tasks, budget, website, vendors and more!</p>
        <div>
          <img
            src="https://cdn0.weddingwire.in/vendor/8303/original/1280/jpg/click-madi-wedding-shoot-bangalore-6_15_248303-168732993930368.webp"
            alt="Real Weddings"
            style={{ width: "60%", height: 550, borderRadius: '2%', float: "right", position: "relative", bottom: 95 }}
          />
        </div>
      </div>

    </div>

  )
};

export default Layout;

