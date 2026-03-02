// src/app/components/projectcard.js → 100% FINAL & BULLETPROOF
'use client';

import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden
                 transition-all duration-700 hover:scale-[1.03] hover:border-purple-500/50 
                 hover:shadow-2xl hover:shadow-purple-500/30"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* IMAGE — 100% poori dikhegi, neeche se bilkul cut nahi hogi */}
      <div className="w-full bg-black overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
         className="w-full rounded-t-3xl transition-transform duration-1000 ease-out group-hover:scale-110 origin-center"
          style={{
            height: 'auto',
            maxHeight: '580px',
            objectFit: 'contain',           // ← contain = poori image dikhegi
            objectPosition: 'top center'    // ← top se shuru, bottom cut nahi hoga
          }}
        />
        {/* Hover overlay */}
       {/* <div className={`absolute inset-0 rounded-t-3xl bg-linear-to-br from-purple-600/10 to-indigo-600/10 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} /> */}
      </div>

      {/* CONTENT — Solid background, hamesha neeche */}
      <div className="bg-black/95 p-7 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags?.map((tag, i) => (
            <span key={i} className="px-5 py-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-8">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200 font-medium">
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-medium">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}