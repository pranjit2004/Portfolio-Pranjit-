import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  

  return (
    <main className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>

          <p className="text-lg text-gray-600">
            Some of the projects I have built while learning and exploring
            modern web development and computer science.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>

              <p className="text-gray-600 leading-7 mb-6">
                {project.description}
              </p>

              <p className="text-sm font-medium text-gray-500 mb-6">
                {project.tech}
              </p>

              {project.link !== "#" ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition inline-block"
                >
                  View Project
                </Link>
              ) : (
                <button
                  disabled
                  className="bg-gray-700 text-gray-400 px-5 py-2 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
