import "../About/About.css";
import { Link } from "react-router-dom";

// import one from "../../assets/1.jpeg";
// import two from "../../assets/2.jpeg";
import collegeimg from "../../assets/col_224.jpg";
const About = () => {
  return (
    <>
      <section className="white-section" id="features">
        <div className="about-us-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="img-head">
                  <img src={collegeimg} alt="College photo" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="text-head">What we do at Parivarthana ?</h2>
                <div className="break-small mb-2"></div>
                <p className="text-para">
                  Parivarthana Unit is the decentralized, waste-management unit
                  in the campus of CHRIST (Deemed to be University) which dates
                  back to the year 2008. It creates both a social as well as an
                  ecological impact. It is an organized effort in ensuring the
                  proper waste-management practices with the help of the women
                  working in the unit and all the students of the campus. Its
                  main objective is to ensure that Christ University is a
                  zero-waste campus by recycling all the materials that it can.
                </p>
                <div className="row">
                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      <i className="fa fa-users mb-3"></i>
                      <h4 className="mb-0">Dry Waste</h4>
                      <p className="mb-0">12,150 kg</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      <i className="fa fa-wrench mb-3"></i>
                      <h4 className="mb-0">Wet Waste</h4>
                      <p className="mb-0">2,335 kg</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 mb-2 mb-md-0">
                    <div className="box">
                      <i className="fa fa-paper-plane mb-3"></i>
                      <h4 className="mb-0">Compost</h4>
                      <p className="mb-0">293 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="feature-box col-lg-4">
            <h3>Waste Segregation</h3>
            <p>Segregated into wet waste and dry waste</p>
          </div>
          <div className="feature-box col-lg-4">
            <h3>Paper Recycling Unit</h3>
            <p>
              ‘Best out of waste’ by creating beautiful products from old paper
            </p>
          </div>
          <div className="feature-box col-lg-4">
            <h3>Water Treatment</h3>
            <p>
              All the wastewater on campus is treated and reused at the
              Parivarthana unit
            </p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <Link to="/product" className="nav-link text-white link-style">
          <button
            className="w-50 btn btn-lg btn-primary"
            type="button"
          >
            See our products
          </button>
        </Link>
      </section>
      {/* <section className="colored-section" id="testimonials">
        <div
          id="testimonials-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2 className="testimonials-text">note note note note.</h2>
              <img className="testimonials-img" src={one} alt="1" />
              <em>sejal</em>
            </div>

            <div className="carousel-item">
              <h2 className="testimonials-text">
                service learning service learning service learning{" "}
              </h2>
              <img className="testimonials-img" src={two} alt="2" />
              <em>qwerty</em>
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
      </section> */}

      {/* <section className="colored-section" id="press">
        <img className="press-img" src="" alt="zzz" />
        <img className="press-img" src="" alt="sss" />
        <img className="press-img" src="" alt="ddd" />
        <img className="press-img" src="" alt="fgg" />
      </section> */}
    </>
  );
};

export default About;
