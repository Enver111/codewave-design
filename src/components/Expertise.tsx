import React from "react";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Брендинг",
      description:
        "Комплексные решения фирменного стиля и развития бренда. Профессиональный брендинг охватывает широкий спектр цифровых и физических элементов для создания целостной идентичности бренда с визуально впечатляющим подходом.",
    },
    {
      title: "UI Дизайн",
      description:
        "Разрабатываю визуальные идентичности и брендовые решения через глубокие исследования, эскизирование и доработку. Такой подход помогает в концептуализации сложных задач и формирует основу общей дизайн-стратегии, создавая целостный, гармоничный брендовый опыт.",
    },
    {
      title: "UX Дизайн",
      description:
        "Концептуализирую современный UX и цифровые интерфейсы, используя пользователе-ориентированную методологию через информационную архитектуру, прототипирование и пользовательские техники для определения и улучшения пути пользователя, формируя требования к дизайну.",
    },
    {
      title: "Разработка",
      description:
        "Создаю удобные, интуитивные и привлекательные веб-сайты. Услуги веб-разработки от понимания прототипов до реализации веб-приложений любой сложности. Применяю современные подходы для быстрого запуска понятных веб-решений.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-foreground">
          Компетенция
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center">
                <span className="w-2 h-2 bg-foreground rounded-full mr-3"></span>
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
