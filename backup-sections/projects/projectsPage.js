import ProjectCard from '../components/projectcard.js';
import { projects } from '../data/projects.js';

export default function ProjectsPage() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* M. Awais Ali wala EXACT colorful heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my favorite works built with modern tech & clean code.
          </p>
        </div>

        {/* Clean responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Pehle wala killer button — ab aur zyada animated */}
        <div className="text-center mt-20 lg:mt-28">
          <a
            href="/about"
            className="group relative inline-flex items-center gap-4 px-14 py-7 
                       bg-linear-to-r from-purple-600 to-indigo-600 
                       text-white font-bold text-2xl rounded-2xl 
                       overflow-hidden shadow-2xl shadow-purple-500/40
                       transform hover:scale-110 active:scale-95 
                       transition-all duration-500 ease-out"
          >
            {/* Shining background animation */}
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30 
                             translate-x-[-200%] group-hover:translate-x-[200%] 
                             transition-transform duration-1000 ease-in-out"></span>

            <span className="relative z-10 flex items-center gap-3">
              About Me
              <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}