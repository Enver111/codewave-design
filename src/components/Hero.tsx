import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex justify-center">
          {/* Main Title */}
          <div>
            <h1 className="text-8xl lg:text-[160px] font-bold leading-none text-foreground">
              Веб-сайты<span className="text-foreground">&</span>
              <br />
              Branding
            </h1>
          </div>

          {/* Right Side Content */}
          <div className="absolute top-55 left-220 md:right-10 lg:right-20">
            <div className="mb-8">
              <button className="text-sm text-muted-foreground flex items-center gap-2 hover:bg-secondary hover:text-foreground transition-colors duration-200 cursor-pointer p-8 rounded-[144px]">
                SCROLL DOWN ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
