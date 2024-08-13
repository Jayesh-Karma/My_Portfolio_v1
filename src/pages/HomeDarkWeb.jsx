import ContactCtaContainer from "../components/ContactCtaContainer";
import HeroSection from "../components/HeroSection";
import ProjectPart from "../components/ProjectPart";
import TechStackSection from "../components/TechStackSection";
import Footer from "../components/FrameComponent";
import NavBar from "../components/NavBar";

const HomeDarkWeb = () => {
  return (
    <div className="w-full relative bg-dark-main-bg overflow-hidden flex flex-col items-center justify-center pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[6.25rem] leading-[normal] tracking-[normal] mq750:gap-[3.125rem] mq450:gap-[1.563rem]">
      <img
        className="w-full  absolute right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/background-gradient.svg"
      />

    <section
      className={`flex flex-col w-11/12 items-center justify-center p-4 box-border max-w-full text-left text-basic-light-gray font-inter `}
    >
      <div className="w-full max-w-screen-xl flex flex-col items-start justify-start gap-12">

      <NavBar />   
      <HeroSection />
      </div>
      </section>

      <ProjectPart />
      <div className=" h-[1rem]" />
      <TechStackSection/>

      <div className=" h-[1rem]" />
      <ContactCtaContainer />
      
      
      <img
        className="w-full  absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/background-gradient1.svg"
      />

      
      <Footer />
    </div>
  );
};

export default HomeDarkWeb;
