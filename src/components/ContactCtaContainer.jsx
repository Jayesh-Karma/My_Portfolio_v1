import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ContactCtaContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.875rem] box-border max-w-full text-left text-[3rem] text-basic-white font-inter-16-regular ${className}`}
    >
      <div className="  w-[64rem] bg-dark-main-bg flex flex-row items-start justify-between max-w-full gap-[1.25rem] z-[1] mq750:flex-wrap mq750:justify-center">
        <div className="w-[31rem] flex flex-col items-start justify-start lg:text-center gap-[0.5rem] max-w-full">
          <h1 className="m-0 lg:ml-6 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[1.813rem] mq1050:text-[2.375rem]">
            Let’s work together
          </h1>
          <div className="self-stretch relative text-[1.25rem] tracking-[-0.02em] text-basic-medium-gray mq450:text-[1rem]">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </div>
        </div>
        <div className="w-[12.563rem] flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border">
          <Button
            component="a"
            href="mailTo:jayeshkarma06@gmail.com"
            className="self-stretch h-[3.75rem] shadow-[0px_1px_2px_rgba(255,_255,_255,_0.02)_inset,_0px_2px_4px_rgba(255,_255,_255,_0.08)_inset,_0px_7px_4px_rgba(0,_0,_0,_0.15)]"
            startIcon={<img width="24px" height="24px" src="/send.svg" />}
            variant="contained"
            
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "linear-gradient(180deg, #1a1a1a, #131313)",
              borderRadius: "9px",
              "&:hover": {
                background: "linear-gradient(180deg, #1a1a1a, #131313)",
              },
              height: 60,
            }}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

ContactCtaContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactCtaContainer;
