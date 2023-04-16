import "../ProductDetails/ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { dataset } from "../../data.js";
import React, { useState } from "react";
// for (let index = 0; index < 4; index++) {
//   <>
//     <div className="small-img-group">
//     <div className="small-img-col">
//       <img
//         className="small-img"
//         src= {product.linkImg+index+".jpg"}
//         width="100%"
//         alt=""
//       />
//   </div>

//   </>
// }
function getPrice(item) {
  let max = Math.max(...item.price);
  let min = Math.min(...item.price);
  return (
    <h2>
      &#8377; {min} to &#8377; {max}
    </h2>
  );
}

const ProductDetails = () => {
  const id = useParams().id;
  const product = dataset.find((prd) => prd.id === Number(id));
  const photos = [];
  for (let index = 0; index < 4; index++) {
    photos.push(
      <div className="small-img-col">
        <img
          className="small-img"
          src={product.linkImg + index + ".jpg"}
          width="100%"
          alt=""
        />
      </div>
    );
  }
  const [selected, setSelected] = useState(0);

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  let sizeIndex = 0;
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <section className="container sproduct my-5 pt-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12">
          <img
            className="img-fluid w-100 pb-1"
            src={product.linkImg + "1.jpg"}
            id="MainImg"
            alt=""
          />
          <div className="small-img-group">{photos}</div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          {/* <h6>Home / Plants</h6> */}
          <h3 className="py-4">{product.title}</h3>
          {selected >= 1 ? (
            <h2>&#8377;{product.price[selected - 1]}</h2>
          ) : (
            getPrice(product)
          )}
          {/* <h2>&#8377;{product.price[selected - 1]}</h2> */}
          <select className="my-3" onChange={handleChange}>
            <option value="0">Select Size</option>
            <option value="1">Small</option>
            <option value="2">Large</option>
          </select>
          {/* <input type="number" value="1" min="1" />
          <button className="buy-btn">Add to Cart</button> */}
          <h4 className="mt-5 mb-5">Product Description</h4>
          <span>
            Make a statement with our Recycled Photo Frame and showcase your
            favorite memories in an eco-friendly way.
            <br />
            <br />
            Introducing our eco-friendly Recycled Photo Frame, the perfect way
            to display your cherished memories while making a positive impact on
            the environment. Made entirely from recycled materials, this photo
            frame is a beautiful and sustainable addition to your home decor.
            <br />
            <br />
            Crafted with care and attention to detail, the frame features a
            rustic, distressed finish that adds character and charm to any
            space. Its various color palette makes it easy to match with any
            interior design style, while its sturdy construction ensures that
            your photos will stay secure and protected.
            <br />
            <br />
            Each frame is unique, as it is crafted from a variety of recycled
            materials, giving it a one-of-a-kind look and feel. The frame comes
            with a glass cover to protect your photo and a sturdy stand to keep
            it upright on a tabletop.
            <br />
            <br />
            By choosing our Recycled Photo Frame, you're not only preserving
            your memories, but you're also making a positive impact on the
            environment. It's the perfect gift for eco-conscious friends and
            family members or for anyone who appreciates beautiful, sustainable
            home decor.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
