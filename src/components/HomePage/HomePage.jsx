import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import infoimg from "../../assets/infoimg.JPG";
import ttmimg1 from "../../assets/ttmimg1.JPG";
import ttmimg2 from "../../assets/ttmimg2.JPG";
class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <section className="colored-section" id="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="big-heading"> What do we do ?</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="white-section" id="features">
          <div className="about-us-section bg-light">
            <div className="container">
              <div className="row">
                <div className=" mb-4 mb-lg-0 ">
                  <div className="img-head">
                    <img src={infoimg} />
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-head">Know More About Us.</h2>
                  <div className="break-small mb-2"></div>
                  <p className="text-para">
                    WASTE SEGREGATION
                    <br />
                    PAPER RECYCLING
                    <br />
                    COMPOSTING
                    <br />
                    WATER TREATMENT
                    <br />
                    BIOGAS
                    <br />
                  </p>
                  <div className="row">
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                      <div className="box">
                        <i className="fa fa-users mb-3"></i>
                        <h4 className="mb-0">total</h4>
                        <p className="mb-0">900</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                      <div className="box">
                        <i className="fa fa-wrench mb-3"></i>
                        <h4 className="mb-0">total</h4>
                        <p className="mb-0">900</p>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                      <div className="box">
                        <i className="fa fa-paper-plane mb-3"></i>
                        <h4 className="mb-0">total</h4>
                        <p className="mb-0">900</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="feature-box col-lg-4">
              <ion-icon
                name="heart-half-outline"
                className="feature-icon"
              ></ion-icon>
              <h3>REUSE</h3>
              <p>
                "Reduce, Reuse, Recycle" is the Parivarthana organization's
                motto, and it's also one of the topics that the unit educates
                faculty and students about, along with the importance of trash
                management and garbage segregation.{" "}
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <ion-icon
                name="star-half-outline"
                className="feature-icon"
              ></ion-icon>
              <h3>REDUCE</h3>
              <p>
                Parivarthana uses dry wastes to create lovely and practical
                handmade eco-friendly goods, spreading the message that trash
                can be a resource. The sales of these products help Parivarthana
                provide financial benefits to the impoverished women who labor
                there.
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <ion-icon
                name="checkmark-circle-outline"
                className="feature-icon"
              ></ion-icon>
              <h3>RECYCLE</h3>
              <p>
                Parivarthana is all about decentralized waste management
                practices, which primarily emphasizes raising awareness among
                the student community, recycling waste paper and tetra packs, a
                composting unit, a bio-gas plant for producing energy from food
                waste, and the creation of livelihoods for the Common Interest
                Groups.
              </p>
            </div>
          </div>
        </section>

        <section className="colored-section" id="testimonials">
          <div
            id="testimonials-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h2 className="testimonials-text">PAPER RECYCLING</h2>
                <img className="testimonials-img" src={ttmimg1} alt="1" />
                <em>
                  Paper recycling and the use of recycled paper products offer
                  several benefits: Conservation of natural resources: Recycling
                  paper reduces the demand for virgin wood pulp, which helps to
                  conserve forests and other ecosystems. It takes fewer trees to
                  produce recycled paper compared to paper made from virgin
                  materials. Energy savings: Recycling paper requires less
                  energy compared to producing paper from scratch. The process
                  of making paper from recycled fibers uses significantly less
                  water and energy, leading to reduced carbon emissions and a
                  smaller environmental footprint. Reduced landfill waste: Paper
                  waste constitutes a significant portion of municipal solid
                  waste. By recycling paper, it is diverted from landfills,
                  reducing the volume of waste and extending the lifespan of
                  landfill sites.
                </em>
              </div>

              <div className="carousel-item">
                <h2 className="testimonials-text">WASTE SEGREGATION</h2>
                <img
                  className="testimonials-img"
                  src={ttmimg2}
                  alt="2"
                />
                <em>
                  Waste segregation and the use of its products offer numerous
                  benefits to the environment and society. By segregating waste
                  at its source, different types of waste such as organic,
                  paper, plastic, glass, and metal can be separated, allowing
                  for more efficient and effective recycling and waste
                  management processes. This practice helps to reduce the amount
                  of waste that ends up in landfills, minimizing the strain on
                  these sites and extending their lifespan. Waste segregation
                  also enables the recovery of valuable materials from the waste
                  stream, such as metals and plastics, which can be recycled and
                  reused.{" "}
                </em>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonials-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#testimonials-carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
