import { Link } from "react-router";
import { MenuLink } from "./MenuLink";
import { mainMenuData } from "../../data/mainMenuData";
import heroImg from "../../assets/movies-hero.png";

export function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={heroImg} alt="Logo" style={{ height: "3rem" }} />
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {mainMenuData.map((link) => (
            <MenuLink key={link.text} to={link.href}>
              {link.text}
            </MenuLink>
          ))}
        </ul>
        <div className="col-md-3 text-end">
          <Link to="/register" className="btn btn-primary me-2">
            Register
          </Link>
          <Link to="/login" className="btn btn-outline-primary">
            Login
          </Link>
        </div>
        <div className="col-md-3 text-end">
          <Link to="/dashboard" className="btn btn-primary me-2">
            Dashboard
          </Link>
        </div>
      </header>
    </div>
  );
}
