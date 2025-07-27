import React from "react";
import { projects } from "../../data/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Проекты</h2>
            <p className="text-muted-foreground max-w-md">
              Мы как создатели современных, удобных для пользователя веб- и
              цифровых решений, можем вывести бизнес на новый уровень с помощью
              своих решений. Мы стремимся помочь вам повысить привелекательность
              вашего бизнеса.
            </p>
          </div>
          <button className="text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-200 p-4 rounded-[20px] cursor-pointer">
            Больше →
          </button>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-between gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div
                className={`project-card ${project.color} w-[600px] h-[400px] rounded-3xl relative overflow-hidden`}
              >
                <div className="project-image absolute bottom-0 right-0 w-[500px] h-[300px] group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-ss-3xl object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-200 mt-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {project.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
