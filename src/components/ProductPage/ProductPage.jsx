import { Link } from "react-router-dom";
import "../ProductPage/ProductPage.css";
import { dataset } from "../../data.js";
function getPrice(item){
  if(item.price.length > 1){
    let max = Math.max(...item.price);
    let min = Math.min(...item.price);
     return <>&#8377; {min} to &#8377; {max}</>  
  }
  else {
    return <>&#8377; {item.price[0]}</>;
  }
}
const ProductPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <ul className="products">
            {dataset.map((item) => (
              <li className="product" key={item.id}>
                <Link
                  to={"/product/"+item.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="product-img">
                    <img className="img" src={item.linkImg + "1.jpg"} alt="prd" />
                  </div> 
                  <p className="product-title">{item.title}</p>
                  <p className="product-price">{getPrice(item)}</p>
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
