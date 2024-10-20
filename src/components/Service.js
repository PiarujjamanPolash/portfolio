const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Services</div>
          <div className="subtitle">What I Do</div>
        </div>
        {/* services items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fab fa-wordpress" />
              </div>
              <div className="name">
                WordPress <br /> 
                Development
              </div>
              <div className="single-post-text">
                <p>
                Custom WordPress development for versatile and user-friendly websites.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fab fa-shopify" />
              </div>
              <div className="name">
                Shopify <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                Designing and optimizing Shopify stores for seamless eCommerce experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-code" />
              </div>
              <div className="name">
                Front-End <br />
                Design
              </div>
              <div className="single-post-text">
                <p>
                Building responsive and dynamic user interfaces with modern frameworks like ReactJs and NextJs.
                </p>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="name">
                eCommerce <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                Creating high-performing online stores and optimizing sales for business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
