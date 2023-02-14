import "../ProductPage/ProductPage.css";
import { dataset } from "../../data.js";
const ProductPage = () => {
  return (
    <section>
      <div className="container">
        <ul className="products">
          {dataset.map((item) => (
            <li className="product" key={item.id}>
              <div className="product-img">
                <img className="img" src={item.linkImg} alt="prd" />
              </div>
              <p className="product-title">{item.title}</p>
              <p className="product-price">&#8377; {item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductPage;
