import React from "react";
import { Link } from "react-router-dom";

const Homeabout = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="w-full h-[451px]  max-lg:h-full  max-lg:p-10 px-[150.20px] py-[130.50px] bg-white justify-center items-center inline-flex relative  max-xl:px-4  max-xl:h-full max-sm:p-4">
        <div className="self-stretch justify-center items-center gap-[158px] inline-flex max-lg:flex-wrap max-lg:py-10  max-xl:px-4 max-sm:gap-5 max-lg:gap-5">
          <div className="w-[503.60px] text-black text-[32px] font-normal font-['Graphik'] leading-[38.40px] max-xl:w-full">
            We navigate the intricacies of disruption with finesse. We believe
            true brilliance lies in making the complex appear effortless.
          </div>
          <div className="self-stretch flex-col justify-between items-start inline-flex max-lg:gap-10 max-xl:px-10 max-lg:p-0">
            <div className="w-[400px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full">
              Our commitment is not just to design; it's to create experiences
              that resonate, innovate, and lead industries into a bold new era.
            </div>
            <Link
              to={"/about"}
              onClick={scrollToTop}
              className="hover:bg-yellow-400 transition-all px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex  hover:border-yellow-400 max-sm:w-full"
            >
              <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                About us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
