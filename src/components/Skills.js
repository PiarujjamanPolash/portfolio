import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Design Skills</div>
          <div className="subtitle">Creative ability</div>
        </div>
        {/* skills items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Web Layout</div>
              <div className="single-post-text">
                <p>
                Crafting intuitive and visually appealing website
                 structures for optimal user experience.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "99%" }}>
                  <span className="percent">99%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Figma & Adobe XD</div>
              <div className="single-post-text">
                <p>
                Designing sleek and modern interfaces using Figma and Adobe XD for collaborative prototyping.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Canva</div>
              <div className="single-post-text">
                <p>
                Creating eye-catching graphics and social media content with ease.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="single-post-text">
                <p>
                Enhancing images and designing stunning visuals with advanced Photoshop techniques.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "89%" }}>
                  <span className="percent">89%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                Proficient in conversational English, with strong reading, writing, and speaking skills.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Bengali</div>
              <div className="single-post-text">
                <p>
                Native Bengali speaker with excellent communication abilities.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        {/* skills items*/}
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">WordPress</div>
              <div className="single-post-text">
                <p>Skilled in customizing and developing WordPress 
                  sites with custom themes and plugins.</p>
              </div>
            </li>
            <li>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">HTML, CSS</div>
              <div className="single-post-text">
                <p>Crafting well-structured web pages with clean and 
                  semantic HTML code and Styling websites with modern CSS techniques</p>
              </div>
            </li>
            
            <li>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">JavaScript</div>
              <div className="single-post-text">
                <p>Proficient in building dynamic and interactive
                   web applications using JavaScript.</p>
              </div>
            </li>
            <li>
              <div className="progress p95">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">ReactJs</div>
              <div className="single-post-text">
                <p>Experienced in creating responsive, component-based 
                  front-end applications with ReactJs.</p>
              </div>
            </li>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Next.js</div>
              <div className="single-post-text">
                <p>Developing optimized server-side rendered 
                  applications with Next.js for improved performance.</p>
              </div>
            </li>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Python</div>
              <div className="single-post-text">
                <p>Programming versatile scripts and backend applications with Python.</p>
              </div>
            </li>
            <li>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Liquid</div>
              <div className="single-post-text">
                <p>Expert in using Liquid for custom Shopify theme development and eCommerce solutions.</p>
              </div>
            </li>
            <li>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage" />
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">C/C++</div>
              <div className="single-post-text">
                <p>Understanding of algorithms and system-level programming with C/C++.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
