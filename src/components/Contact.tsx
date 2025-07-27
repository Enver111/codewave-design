import React from "react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-black">
          Давайте поговорим!
        </h2>

        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2 cursor-pointer">
          codewave@yandex.com →
        </button>
      </div>
    </section>
  );
};

export default Contact;
