import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex justify-center">
          <div>
            <h1 className="text-8xl lg:text-[160px] font-bold leading-none text-foreground">
              Веб-сайты<span className="text-foreground">&</span>
              <br />
              Branding
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
