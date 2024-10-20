import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Works = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-col");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".box-items", {
        itemSelector: ".box-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  return (
    <div className="section works" id="section-portfolio">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Portfolio</div>
          <div className="subtitle">Latest works</div>
        </div>
        {/* filter */}
        <div className="filter-menu">
          <div className="filters">
            <div className="btn-group">
              <label
                data-text="All"
                className={`c-pointer ${activeBtn("box-col")}`}
                onClick={handleFilterKeyChange("box-col")}
              >
                <input type="radio" name="fl_radio" defaultValue=".box-col" />
                All
              </label>
            </div>

            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-wordpress")}`}
                onClick={handleFilterKeyChange("f-wordpress")}
                data-text="WordPress"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-wordpress" />
                WordPress 
              </label>
            </div>

            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-shopify")}`}
                onClick={handleFilterKeyChange("f-shopify")}
                data-text="Shopify"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-shopify" />
                Shopify 
              </label>
            </div>

            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-frontend")}`}
                onClick={handleFilterKeyChange("f-frontend")}
                data-text="Frontend"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-frontend" />
                Frontend Development
              </label>
            </div>

          </div>
        </div>
        {/* portfolio items */}
        <div className="box-items">
        

          <div className="box-col f-shopify">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://4topa4.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/topa.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Shopify</div>
                <a href="https://4topa4.com/" className="name has-popup-link">
                Tópa
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-wordpress">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://browsandlips.ae/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/brows.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">WordPress</div>
                <a href="https://browsandlips.ae/" className="name has-popup-link">
                Brows & Lips
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-wordpress">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://shoptanza.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/shoptanza.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">WordPress</div>
                <a href="https://shoptanza.com/" className="name has-popup-link">
                Shoptanza
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-wordpress">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.agewelldr.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/agewellDR.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">WordPress</div>
                <a href="https://www.agewelldr.com/" className="name has-popup-link">
                Age Well DR
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-wordpress">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.agentgpt.io/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/agentgptio.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">WordPress</div>
                <a href="https://www.agentgpt.io/" className="name has-popup-link">
                Agent GPT
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-shopify">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://popuparty.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/popu.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Shopify</div>
                <a href="https://popuparty.com/" className="name has-popup-link">
                Popu Party
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-shopify">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://kitchenempress.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/kitchen.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Shopify</div>
                <a href="https://kitchenempress.com/" className="name has-popup-link">
                Kitchen Empress
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-shopify">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.miod.com.au/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/miod.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Shopify</div>
                <a href="https://www.miod.com.au/" className="name has-popup-link">
                Miod Skincare 
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-frontend">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://whatsupscv.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/scv.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Frontend Dev.</div>
                <a href="https://whatsupscv.com/" className="name has-popup-link">
                whatsup scv
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-frontend">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://gcbuying.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/gc.jpeg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Frontend Dev.</div>
                <a href="https://gcbuying.com/" className="name has-popup-link">
                GC Buying
                </a>
              </div>
            </div>
          </div>


        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Works;
