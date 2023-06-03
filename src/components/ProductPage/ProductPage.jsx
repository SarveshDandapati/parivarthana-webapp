import { Link } from "react-router-dom";
import "../ProductPage/ProductPage.css";
import { dataset } from "../../data.js";
import { useState, useEffect } from "react";
function getPrice(item) {
  if (item.price.length > 1) {
    let max = Math.max(...item.price);
    let min = Math.min(...item.price);
    return <>&#8377; {min} to &#8377; {max}</>
  }
  else {
    return <>&#8377; {item.price[0]}</>;
  }
}
const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/getProducts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json()).
      then((json) => {
        console.log(json);
        setData(json);
      })
  }, [])
  return (
    <>
      <section>
        <div className="break-small mb-2"></div>
        <h1 className="text-head text-center">Products</h1>
        <div className="break-small mb-5"></div>
        <div className="container">
          <ul className="products">
            {data.map((item) => (
              <li className="product" key={item.id}>
                <Link
                  to={""}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product-img">
                    <img className="img" src={item.images[0]} alt="prd" />
                  </div>
                  <p className="product-title">{item.name}</p>
                  <p className="product-price">{item.cost}</p>
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
