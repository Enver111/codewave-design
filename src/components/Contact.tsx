import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-foreground">
          Давайте поговорим!
        </h2>

        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 inline-flex items-center gap-2 cursor-pointer">
          codewave@yandex.com →
        </button>
      </div>
    </section>
  );
};

export default Contact;
