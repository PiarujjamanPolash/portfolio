import About from "@/src/components/About";
import Contacts from "@/src/components/Contacts";
import Service from "@/src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  LanguagesSkills,
} from "@/src/components/Skills";
import Started from "@/src/components/Started";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
const Works = dynamic(() => import("@/src/components/Works"), {
  ssr: false,
});

const Education = dynamic(() => import("@/src/components/Education"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/src/components/Experience"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/src/components/Testimonials"), {
  ssr: false,
});
const Index2 = () => {
  return (
    <Layout>
      {/* Background */}
      <div className="background-bg">
        <div className="background-filter circle">
          <div
            className="background-img"
            style={{ backgroundImage: "url(images/polash.jpg)" }}
          />
        </div>
      </div>

      {/* sections */}
      <Started />
      <About />
      <Service />
      <Experience />
      <Education />
      <DesignSkills />
      <LanguagesSkills />
      <CodingSkills />
      <Testimonials />
      <Works />
      <Contacts />
    </Layout>
  );
};
export default Index2;
