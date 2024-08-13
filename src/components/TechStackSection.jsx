import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TechStackSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[0.875rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[3rem] text-basic-white font-inter-16-regular ${className}`}
    >
      <div className="w-[64rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          Get to know me
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-center text-[2rem]">
          
          
          <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full mq1050:flex-wrap">
            <div className=" flex-1 h-full rounded-13xl bg-gray-300 overflow-hidden flex flex-col items-end justify-start pt-[3.75rem] px-[0rem] pb-[0rem] box-border gap-[1rem] max-w-full mq750:pt-[2.438rem] mq750:box-border">
           
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.5rem] pl-[1.562rem] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit font-extrabold font-inherit inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full text-[1rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                     <Link to={"/about"} className="  no-underline text-white lg:text-3xl">About me</Link>
                </h1>
              </div>
              <div className="self-stretch h-[20.625rem] relative hidden">
                <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(88.35deg,_#151515,_rgba(21,_21,_21,_0))] w-[8.438rem]" />
                <div className="absolute top-[20.625rem] right-[-7.625rem] [background:linear-gradient(79.8deg,_#151515,_rgba(21,_21,_21,_0))] w-[7.625rem] h-[20.625rem] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              </div>
              <div className="w-[4.106rem] h-[7.125rem] relative hidden opacity-[0.28]">
                <img
                  className="absolute top-[-18.937rem] left-[2.888rem] w-[22.438rem] h-[32.75rem] object-cover hidden mix-blend-color-burn"
                  alt=""
                  src="/removal-2@2x.png"
                />
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[0.312rem] max-w-full text-[1rem] text-basic-dark-gray">
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.5rem] pl-[1.562rem] box-border max-w-full">
                  <div className="flex-1 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                    Who I am and What I Do
                  </div>
                </div>
                <div className="self-stretch h-[22.813rem] relative overflow-hidden shrink-0">
                  <img
                    className="absolute top-[3.938rem] left-[9.6rem] w-[13.975rem] h-[16.456rem] object-cover"
                    loading="lazy"
                    alt=""
                    src="/my-project-2@2x.png"
                  />
                </div>
              </div>
              
            </div>


            <div className=" hover:shadow-2xl hover:shadow-gray-60 w-[31.5rem] h-full rounded-13xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[3.75rem] pb-[0rem] pr-[1.5rem] pl-[1.562rem] box-border gap-[1rem] max-w-full mq750:pt-[2.438rem] mq750:box-border">
              <h1 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                <Link to={"/techstack"} className=" no-underline text-white lg:text-3xl">Tech Stack</Link>
              </h1>
              <div className="w-[31.625rem] h-[20.625rem] relative hidden max-w-full">
                <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(88.35deg,_#151515,_rgba(21,_21,_21,_0))] w-[8.438rem]" />
                <div className="absolute top-[20.625rem] right-[-7.625rem] [background:linear-gradient(79.8deg,_#151515,_rgba(21,_21,_21,_0))] w-[7.625rem] h-[20.625rem] [transform:_rotate(180deg)] [transform-origin:0_0]" />
              </div>
              <div className="w-[4.106rem] h-[7.125rem] relative hidden opacity-[0.28]">
                <img
                  className="absolute top-[-18.937rem] left-[2.888rem] w-[22.438rem] h-[32.75rem] object-cover hidden mix-blend-color-burn"
                  alt=""
                  src="/removal-2@2x.png"
                />
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
              <div className="ml-[-4.313rem] w-[37.063rem] flex flex-col items-start justify-start gap-[0.312rem] max-w-[131%] shrink-0 text-[1rem] text-basic-dark-gray">
                <div className=" ml-[5rem] self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.312rem] box-border max-w-full mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border">
                  <div className=" relative text-center w-full">
                    The Dev Tools, and Skills I Know.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.812rem] pl-[2.75rem] box-border max-w-full mq750:pl-[1.375rem] mq750:pr-[1.375rem] mq750:box-border">
                    <div className="h-[22.813rem] w-[31.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[3.75rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:pt-[2.438rem] mq750:box-border">
                      <div className="h-[18.194rem] w-[32.75rem] relative overflow-hidden shrink-0 hidden max-w-full">
                        <div className="absolute top-[0.563rem] left-[calc(50%_-_222.3px)] w-[27.788rem] flex flex-row flex-wrap items-center justify-center gap-[0.881rem]">
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/tools--figma@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--nextjs@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--tailwindcss@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--typescript@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--github@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--warp@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative"
                            alt=""
                            src="/tools--vercel.svg"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--vscode@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative"
                            alt=""
                            src="/tools--expo.svg"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-cover"
                            alt=""
                            src="/tools--react-hook-form@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--react-query@2x.png"
                          />
                          <img
                            className="h-[6.288rem] w-[6.25rem] relative object-contain"
                            alt=""
                            src="/tools--zustand@2x.png"
                          />
                        </div>
                        <div className="absolute w-[calc(100%_-_19px)] top-[13.125rem] right-[0.625rem] left-[0.563rem] [background:linear-gradient(180deg,_rgba(21,_21,_21,_0),_rgba(217,_217,_217,_0))] h-[5.063rem]" />
                      </div>
                      <div className="h-[20.625rem] w-[37.063rem] relative hidden max-w-full">
                        <div className="absolute h-full w-[22.77%] top-[0rem] right-[77.23%] bottom-[0rem] left-[0%] [background:linear-gradient(90deg,_#181818,_rgba(24,_24,_24,_0))]" />
                        <div className="absolute h-full w-[20.57%] top-[100%] right-[-20.57%] bottom-[-100%] left-[100%] [background:linear-gradient(90deg,_#181818,_rgba(24,_24,_24,_0))] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                      </div>
                      <div className="ml-[-5.875rem] h-[26.119rem] w-[40.413rem] flex flex-row items-start justify-start relative shrink-0 max-w-[129%]">
                        <img
                          className="h-full w-full !m-[0] absolute top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain"
                          loading="lazy"
                          alt=""
                          src="/frame-2049@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] z-[1] mt-[-20.625rem] mq450:flex-wrap">
                    <div className="h-[20.625rem] w-[8.438rem] relative [background:linear-gradient(90deg,_#151515,_rgba(21,_21,_21,_0))]" />
                    <div className="h-[20.625rem] w-[7.625rem] relative [background:linear-gradient(90deg,_#151515,_rgba(21,_21,_21,_0))] [transform:_rotate(180deg)]" />
                  </div>
                </div>
              </div>
            </div>
           
          </div>

        
          </div>
        </div>
    </section>
  );
};

TechStackSection.propTypes = {
  className: PropTypes.string,
};

export default TechStackSection;
