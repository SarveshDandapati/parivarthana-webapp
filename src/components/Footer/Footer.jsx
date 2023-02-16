import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="link-style nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link-style nav-link px-2 text-muted">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="link-style nav-link px-2 text-muted">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="link-style nav-link px-2 text-muted">
              Products
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">Parivarthana, A CSA Venture</p>
      </footer>
    </div>
  );
};

export default Footer;
