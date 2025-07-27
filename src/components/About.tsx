import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Let's Talk */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Давайте поговорим
            </h2>
            <a
              href="mailto:code.wave@yandex.com"
              className="text-muted-foreground hover:text-foreground underline"
            >
              code.wave@yandex.com
            </a>
          </div>

          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Здраствуйте, Мы команда CodeWave, мы создаем веб-дизайн
              комплекстных продуктов, занимаемся разработкой фирменного стиля,
              созданием логотипов и брендинга.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
