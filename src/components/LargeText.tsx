import React from "react";

const LargeText = () => {
  const text = "Visual design for digital experiences • ";

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative whitespace-nowrap">
          <div
            className="inline-block"
            style={{
              animation: "scrollText 15s linear infinite",
            }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none inline-block">
              {text.repeat(3)}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeText;
