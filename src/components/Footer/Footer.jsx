import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/" className="link-style nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className="link-style nav-link px-2 text-muted">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className="link-style nav-link px-2 text-muted">
              Contacts
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/product" className="link-style nav-link px-2 text-muted">
              Products
            </Link>
          </li>
        </ul>
        <p class="text-center text-muted">Parivarthana, A CSA Venture</p>
      </footer>
    </div>
  );
};

export default Footer;
