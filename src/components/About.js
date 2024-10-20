const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">About Me</div>
          <div className="subtitle">My story</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col">
            <div className="single-post-text">
              <p>
              Hi, I'm Piarujjaman Polash, a Bangladesh-based web developer and eCommerce expert. 
              I hold a degree in Computer Science and Engineering from Begum Rokeya University, Rangpur. 
              </p>
            </div>
          </div>
          <div className="col">
            <div className="single-post-text">
              <p>
              My journey in web development began with a drive 
              to create seamless and high-performing digital experiences,
               and I’ve been dedicated to building solutions that help 
               businesses grow ever since.
              
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text">
              <p>
              For the past 2-3 years, I’ve worked on a variety 
              of projects through online freelance marketplaces, 
              specializing in WordPress, Shopify, ReactJs, and NextJs.
              My focus is on building seamless digital experiences and 
              high-performing eCommerce solutions to help businesses thrive.
              Whether you need a dynamic website or an optimized online store, 
              I’m here to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Age:</strong> 25
            </li>
            <li>
              <strong>Residence:</strong> Bangladesh
            </li>
            <li>
              <strong>Freelance:</strong> Available
            </li>
            <li>
              <strong>Address:</strong> Bagmara, Rajshahi
            </li>
            <li>
              <strong>Phone:</strong> +880 1783357375
            </li>
            <li>
              <strong>E-mail:</strong> polash.sahel@gmail.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
