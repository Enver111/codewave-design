import React from "react";
import { projects } from "../../data/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-black">Проекты</h2>
            <p className="text-gray-600 max-w-md">
              Мы как создатели современных, удобных для пользователя веб- и
              цифровых решений, можем вывести бизнес на новый уровень с помощью
              своих решений. Мы стремимся помочь вам повысить привлекательность
              вашего бизнеса.
            </p>
          </div>
          <button className="text-sm text-gray-600 hover:bg-gray-50 transition-colors p-4 rounded-[20px] transition-colors cursor-pointer">
            Больше →
          </button>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-between gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div
                className={`${project.color} w-[600px] h-[400px] rounded-3xl relative overflow-hidden group-hover:cursor-pointer`}
              >
                <div className="absolute bottom-0 right-0 w-[500px] h-[300px] transform transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-ss-3xl object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
