import { Link } from "react-router-dom";
import "../ProductPage/ProductPage.css";
import { dataset } from "../../data.js";
const ProductPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <ul className="products">
            {dataset.map((item) => (
              <li className="product" key={item.id}>
                <Link
                  to="/oneproduct"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product-img">
                    <img className="img" src={item.linkImg} alt="prd" />

                  </div>
                  <p className="product-title">{item.title}</p>
                  <p className="product-price">&#8377; {item.price}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
