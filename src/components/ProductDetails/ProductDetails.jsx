import '../ProductDetails/ProductDetails.css'
const ProductDetails = () => {
  return (
    <section class="container sproduct my-5 pt-5">
      <div class="row mt-5">
        <div class="col-lg-5 col-md-12 col-12">
          <img
            class="img-fluid w-100 pb-1"
            src="https://static.wixstatic.com/media/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg"
            id="MainImg"
            alt=""
          />
          <div class="small-img-group">
            <div class="small-img-col">
              <img
                class="small-img"
                src="https://static.wixstatic.com/media/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg"
                width="100%"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                class="small-img"
                src="https://static.wixstatic.com/media/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg"
                width="100%"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                class="small-img"
                src="https://static.wixstatic.com/media/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg"
                width="100%"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                class="small-img"
                src="https://static.wixstatic.com/media/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg/v1/fill/w_399,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e3d737aca64f4010bda5abd4e75a37cf~mv2.jpeg"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <h6>Home / Plants</h6>
          <h3 class="py-4">Product X</h3>
          <h2>&#8377;100</h2>
          <select class="my-3">
            <option>Select Size</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" min="1" />
          <button class="buy-btn">Add to Cart</button>
          <h4 class="mt-5 mb-5">Product Details</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
            natus beatae voluptatibus soluta fugiat maiores, nihil aspernatur.
            Cumque modi quasi laboriosam, molestias error iusto veniam itaque
            aliquam labore quidem!
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;