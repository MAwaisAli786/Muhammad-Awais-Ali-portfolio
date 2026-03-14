'use client'; 

import { motion } from "framer-motion";
 
import Navbar from './components/Navbar'; 
import ProjectCard from './components/projectcard'; 
import { projects } from './data/projects'; 
import { ArrowRight, Mail, Linkedin, Github, Send, GraduationCap, Download } from "lucide-react";
import { 
  siNextdotjs, siReact, siTypescript, siNodedotjs, siTailwindcss, siMongodb, 
  siGit, siGithub, siVercel 
} from 'simple-icons';
import { useState, useEffect } from 'react'; 

// =================================================================
// Framer Motion Variants
// =================================================================
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const educationData = [
  {
    year: '2020 - 2024',
    degree: 'B.S. in Computer Science',
    institute: 'University of Wah, WahCantt',
    description: 'Specializing in Web Development and Artificial Intelligence.'
  },
  
];

// =================================================================
// IMPROVED ROTATING TYPEWRITER COMPONENT (No Duplicate Text + Smoother)
// =================================================================
function RotatingTypewriter() {
  const phrases = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Freelance Creator"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const typingSpeed = isDeleting ? 50 : 120;  
    const pauseTime = 1800; 

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentPhrase.slice(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases]);

  const currentPhrase = phrases[currentPhraseIndex];
  const isCompleted = displayedText === currentPhrase && !isDeleting;

  return (
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide inline-flex items-center">
   <span
  className={`${
    isCompleted
      ? "font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 animate-glow transition-all duration-500"
      : "text-gray-400"   // ← no transition here
  }`}
>
  {displayedText}
</span>

      {!isCompleted && (
        <span className="inline-block w-0.5 h-8 md:h-10 bg-purple-400 ml-1 animate-pulse" />
      )}
    </p>
  );
}

// =================================================================
// HOME PAGE COMPONENT
// =================================================================
export default function Home() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! I will reply soon');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <> 
      <Navbar /> 
      
      <main> 

        {/* 🚀 1. HOME / HERO SECTION – responsive version */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-0">
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 -left-10 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-purple-700/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-20 sm:top-40 -right-5 sm:-right-20 w-40 sm:w-80 h-40 sm:h-80 bg-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-5 sm:-bottom-20 left-1/4 sm:left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-700/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto w-full">

            <div className="overflow-hidden">
          <h2 className="
  text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl
  font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]
  bg-linear-to-r from-purple-300 via-indigo-400 to-pink-400
  bg-clip-text text-transparent
  drop-shadow-[0_0_15px_rgba(168,85,247,0.55)]
  transition-all duration-700
">
  Hi, I'm
</h2>
            </div>

            <div className="mt-4 sm:mt-10 md:mt-12">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight wrap-break-word">
                {"Muhammad Awais Ali".split('').map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 translate-y-10 sm:translate-y-16 animate-letterUp"
                    style={{ animationDelay: `${i * 0.04 + 0.7}s` }}
                  >
                    <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="mt-10 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 opacity-0 animate-revealText" style={{ animationDelay: '2.2s' }}>
              <RotatingTypewriter />
            </div>
            
            <div className="mt-8 sm:mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 animate-revealText"
                 style={{ animationDelay: '2.4s' }}>
              
              <a href="#projects" className="group relative px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-medium text-white rounded-xl sm:rounded-2xl 
                                             bg-linear-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-600/40
                                             hover:shadow-purple-500/60 hover:scale-105 active:scale-95 
                                             transition-all duration-400 border border-purple-500/30 overflow-hidden w-full sm:w-auto max-w-xs">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  View My Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform duration-400" />
                </span>
              </a>

              <a href="#contact" className="group px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-medium rounded-xl sm:rounded-2xl border-2 border-purple-500/40 
                                             backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-purple-400 
                                             hover:scale-105 active:scale-95 transition-all duration-400 w-full sm:w-auto max-w-xs text-center">
                <span className="flex items-center justify-center gap-2 sm:gap-3 text-purple-200">
                  Get In Touch
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" />
                </span>
              </a>
            </div>

            <a href="#education" className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-revealText hidden sm:block"
                 style={{ animationDelay: '3s' }}>
              <div className="w-4 sm:w-6 h-6 sm:h-10 border-2 border-purple-500/40 rounded-full flex justify-center">
                <div className="w-1 h-1 sm:h-3 bg-purple-400 rounded-full mt-1 sm:mt-2 animate-scrollDot"></div>
              </div>
            </a>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 📚 2. EDUCATION SECTION – responsive version */}
        {/* ================================================================= */}
        <section id="education" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gray-950">
          <div className="container mx-auto max-w-6xl lg:max-w-7xl">

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-10 sm:mb-16 lg:mb-24"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                My Journey
              </h1>
              <p className="mt-3 sm:mt-6 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-2">
                A look at my educational background, which laid the foundation for my passion in Web Development.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">

              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-purple-600/40 sm:bg-purple-600/50"></div>

              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 lg:mb-16 pl-10 sm:pl-0 ${
                    index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-10">
                    <div className="p-2 sm:p-3 rounded-full bg-purple-700 border-4 border-gray-950 shadow-lg shadow-purple-900/40">
                      <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>

                  <div className={`w-full sm:w-5/12 lg:w-1/2 bg-black/50 border border-purple-500/30 rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-purple-700/40 transition-shadow duration-500 ${
                    index % 2 === 0 
                      ? 'sm:mr-8 lg:mr-12 sm:text-right' 
                      : 'sm:ml-8 lg:ml-12 sm:text-left'
                  }`}>
                    <p className="text-xs sm:text-sm font-semibold text-pink-400 mb-1">{item.year}</p>
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">{item.degree}</h3>
                    <p className="text-sm sm:text-lg font-medium text-purple-300 mb-2">{item.institute}</p>
                    <p className="text-gray-400 text-xs sm:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 💼 EXPERIENCE SECTION – responsive version */}
        {/* ================================================================= */}
        <section id="experience" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gray-950">
          <div className="container mx-auto max-w-6xl lg:max-w-7xl">

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-10 sm:mb-16 lg:mb-24 px-2"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                Professional Experience
              </h1>
              <p className="mt-3 sm:mt-6 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Where I've applied my skills in real-world projects and delivered production-ready applications.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">

              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-purple-600/40 sm:bg-purple-600/50"></div>

              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-16 pl-10 sm:pl-0 justify-start"
              >
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 z-10">
                  <div className="p-2 sm:p-4 rounded-full bg-purple-700 border-4 border-gray-950 shadow-lg shadow-purple-900/50">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="w-full sm:w-5/12 lg:w-1/2 bg-black/50 border border-purple-500/30 rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-purple-700/40 transition-shadow duration-500 sm:mr-8 lg:mr-12 sm:text-right">
                  <p className="text-xs sm:text-sm font-semibold text-pink-400 mb-1">2025 – Present</p>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Full-Stack Developer</h3>
                  <p className="text-sm sm:text-lg font-medium text-purple-300 mb-2">SnipByte</p>
                  
                  <ul className="text-gray-300 space-y-2 text-xs sm:text-base list-disc list-inside marker:text-purple-400">
                    <li>Developed and maintained multiple full-stack web applications using Next.js, React, Node.js, and MongoDB</li>
                    <li>Collaborated with designers and backend team to implement responsive UI/UX features</li>
                    <li>Optimized application performance and reduced page load times by 35% through code splitting and lazy loading</li>
                    <li>Implemented authentication, authorization, and secure API integrations</li>
                    <li>Participated in code reviews and contributed to improving team coding standards</li>
                  </ul>
                </div>
              </motion.div>

            </div>

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center mt-10 sm:mt-16 lg:mt-20 px-4"
            >
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-12 lg:px-14 py-4 sm:py-6 lg:py-7 
                         bg-linear-to-r from-purple-600 to-indigo-600 
                         text-white font-bold text-base sm:text-xl lg:text-2xl rounded-xl sm:rounded-2xl 
                         overflow-hidden shadow-xl shadow-purple-500/40
                         hover:scale-105 active:scale-95 
                         transition-all duration-400 ease-out w-full sm:w-auto max-w-sm text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-20 
                                translate-x-[-200%] group-hover:translate-x-[200%] 
                                transition-transform duration-1000 ease-in-out"></span>

                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  More About Me
                  <svg className="w-4 h-4 sm:w-6 sm:h-7 group-hover:translate-x-1.5 sm:group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </motion.div>

          </div>
        </section>

        {/* The rest of your sections remain completely unchanged */}
        {/* 👤 ABOUT SECTION */}
        <section id="about" className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 bg-black">
          <div className="container mx-auto max-w-7xl">

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-12 sm:mb-24"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                About Me
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 items-center mb-16 sm:mb-28">
              
              <motion.div 
                variants={slideFromLeft} 
                initial="initial" 
                whileInView="animate" 
                viewport={{ once: true, amount: 0.1 }}
                className="flex justify-center lg:justify-end"
              >
               <div className="relative group">
  <div className="absolute -inset-1 sm:-inset-2 bg-linear-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
  
  <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
    <img
      src="/images/image.jpeg"
      alt="Muhammad Awais Ali"
      className="
        w-full 
        h-auto 
        min-h-[280px] 
        max-h-[400px] 
        sm:max-h-[420px] 
        md:max-h-[480px] 
        object-cover 
        object-top
      "
    />
  </div>
</div>
              </motion.div>

              <motion.div 
                variants={slideFromRight} 
                initial="initial" 
                whileInView="animate" 
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6 sm:space-y-8"
              >
                <h2 className="text-3xl sm:text-5xl font-bold text-white">
                  Hey! I'm <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">M. Awais Ali</span>
                </h2>

                <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-300 leading-relaxed">
                  <p>A passionate <span className="text-purple-300 font-semibold">Full-Stack Developer</span> from Pakistan who loves crafting beautiful, fast, and scalable web experiences.</p>
                  <p>I specialize in <span className="text-cyan-400">Next.js</span>, <span className="text-purple-400">Tailwind</span>, <span className="text-green-400">Node.js</span>, and <span className="text-green-400">MongoDB</span>.</p>
                  <p>When I'm not coding, I'm designing sleek UIs or building cinematic portfolio animations — just like this one.</p>
                  <p className="text-lg sm:text-xl text-gray-200 font-medium">Currently open for freelance & full-time opportunities.</p>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                  {['Next.js', 'React', 'Node.js', 'Tailwind', 'MongoDB', 'TypeScript', 'Express'].map((tech) => (
                    <span key={tech} className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/10 border border-purple-500/40 text-purple-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm hover:bg-purple-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.1 }}
              className="flex justify-center"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 sm:gap-4 px-10 sm:px-14 py-5 sm:py-7 
                         bg-linear-to-r from-purple-600 to-indigo-600 
                         text-white font-bold text-lg sm:text-2xl rounded-2xl 
                         overflow-hidden shadow-2xl shadow-purple-500/40
                         transform hover:scale-110 active:scale-95 
                         transition-all duration-500 ease-out w-full sm:w-auto max-w-xs text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30 
                                 translate-x-[-200%] group-hover:translate-x-[200%] 
                                 transition-transform duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  View My Projects
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <a
             href="/resume/cv.pdf"
              download
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-xs text-center"
            >
              Download Resume
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

      {/* 🔥 PROFESSIONAL SKILLS SECTION WITH SIMPLE-ICONS 🔥 */}
<section id="skills" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 md:px-8 bg-gray-950">
  <div className="container mx-auto max-w-7xl">

    {/* Heading */}
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-10 sm:mb-16 lg:mb-24 px-2 sm:px-0"
    >
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
        Skills & Technologies
      </h1>
      <p className="mt-3 sm:mt-6 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
        Tools and technologies I use to build modern, scalable, and beautiful web applications.
      </p>
    </motion.div>

    {/* Skills Grid – responsive columns + padding */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
      {[
        { name: "Next.js", icon: siNextdotjs },
        { name: "React", icon: siReact },
        { name: "TypeScript", icon: siTypescript },
        { name: "Node.js", icon: siNodedotjs },
        { name: "Tailwind CSS", icon: siTailwindcss },
        { name: "MongoDB", icon: siMongodb },
        { name: "Git", icon: siGit },
        { name: "GitHub", icon: siGithub },
        { name: "Vercel", icon: siVercel }
      ].map((skill, index) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.04 }}
            className="group flex flex-col items-center justify-center p-4 sm:p-7 md:p-9 lg:p-10 
                       bg-black/30 rounded-xl sm:rounded-2xl backdrop-blur-sm 
                       border border-purple-500/20 hover:border-purple-500/50 
                       hover:bg-purple-500/5 transition-all duration-500 
                       shadow-md hover:shadow-purple-500/20"
          >
            <svg
              width="48"
              height="48"
              className="mb-2 sm:mb-4 w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 
                         transition-all duration-500 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
              dangerouslySetInnerHTML={{ __html: Icon.svg }}
              style={{
                filter: 'grayscale(100%)',
                transition: 'filter 0.5s, color 0.5s',
                color: '#ffffff'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth >= 768) { // hover sirf desktop pe
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.color = `#${Icon.hex}`;
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth >= 768) {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
            />
            <h3 className="text-xs sm:text-base md:text-lg font-medium text-gray-300 
                           group-hover:text-white transition-colors duration-300 text-center">
              {skill.name}
            </h3>
          </motion.div>
        );
      })}
    </div>

    {/* View Projects Button – responsive size */}
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center mt-10 sm:mt-16 lg:mt-20"
    >
      <a
        href="#projects"
        className="group relative inline-flex items-center gap-2 sm:gap-4 
                   px-6 sm:px-10 lg:px-14 py-3 sm:py-5 lg:py-7 
                   bg-linear-to-r from-purple-600 to-indigo-600 
                   text-white font-bold text-base sm:text-xl lg:text-2xl 
                   rounded-xl sm:rounded-2xl overflow-hidden 
                   shadow-2xl shadow-purple-500/40 
                   hover:scale-105 active:scale-95 
                   transition-all duration-500 ease-out w-full sm:w-auto max-w-xs sm:max-w-none text-center"
      >
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30 
                        translate-x-[-200%] group-hover:translate-x-[200%] 
                        transition-transform duration-1000 ease-in-out"></span>
        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          View My Projects
          <svg className="w-4 h-4 sm:w-6 sm:h-7 group-hover:translate-x-1.5 sm:group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </motion.div>
  </div>
</section>

        {/* 💼 4. PROJECTS SECTION */}
        <section id="projects" className="py-16 sm:py-32 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-12 sm:mb-24"
            >
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Here are some of my favorite works built with modern tech & clean code.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-16">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }} 
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mt-16 sm:mt-28"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 sm:gap-4 px-10 sm:px-14 py-5 sm:py-7 
                         bg-linear-to-r from-purple-600 to-indigo-600 
                         text-white font-bold text-lg sm:text-2xl rounded-2xl 
                         overflow-hidden shadow-2xl shadow-purple-500/40
                         transform hover:scale-110 active:scale-95 
                         transition-all duration-500 ease-out w-full sm:w-auto max-w-xs text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white to-transparent opacity-30 
                                 translate-x-[-200%] group-hover:translate-x-[200%] 
                                 transition-transform duration-1000 ease-in-out"></span>

                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Get In Touch
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 📧 5. CONTACT SECTION */}
        <section id="contact" className="min-h-screen py-20 sm:py-32 bg-black relative overflow-hidden flex items-center justify-center px-4 sm:px-6">

          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-10 -left-20 sm:-left-40 w-72 sm:w-96 h-72 sm:h-96 bg-purple-700/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 -right-20 sm:-right-40 w-64 sm:w-80 h-64 sm:h-80 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full">

            <motion.div 
              variants={fadeIn} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-12 sm:mb-20"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
               
                  Get In Touch
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                Have a project in mind? Want to collaborate? Or just wanna say hi?
              </p>
            </motion.div>
           
{/* Contact Cards */}
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1 }}
      className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
    >
      {/* Left side - optional intro or form (currently empty in your code, keeping structure) */}
      {/* If you want to add a contact form later, this column is ready */}

      {/* Right side - contact methods */}
      <div className="space-y-5 sm:space-y-6 lg:col-span-2 lg:max-w-3xl lg:mx-auto">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mawaisali2002@gmail.com&su=Inquiry&body=Hello!%20Please%20let%20me%20know%20the%20topic%20of%20discussion"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-gray-800/60 rounded-2xl hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-900/10"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">Email</div>
            <div className="text-base sm:text-lg lg:text-xl font-medium text-purple-300 group-hover:text-purple-200 transition-colors truncate">
              mawaisali2002@gmail.com
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923448848600"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-gray-800/60 rounded-2xl hover:border-green-500/40 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-900/10"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-600 text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30">
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">WhatsApp</div>
            <div className="text-base sm:text-lg lg:text-xl font-medium text-green-300 group-hover:text-green-200 transition-colors">
              +92 344 8848600
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-awais-ali-335766374"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-gray-800/60 rounded-2xl hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/10"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-700 text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
            <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">LinkedIn</div>
            <div className="text-base sm:text-lg lg:text-xl font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
              Muhammad Awais Ali
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MAwaisAli786"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 bg-white/5 backdrop-blur-sm border border-gray-800/60 rounded-2xl hover:border-gray-400/50 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-gray-900/10"
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br from-gray-800 to-gray-950 text-white shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-700/30">
            <Github className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base font-medium text-gray-300 tracking-wide">GitHub</div>
            <div className="text-base sm:text-lg lg:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
              MAwaisAli786
            </div>
          </div>
        </a>
      </div>
    </motion.div>
            </div>
        </section>

      </main>

      <footer className="mt-auto py-8 sm:py-10 bg-black/80 border-t border-purple-900/30">
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          © Muhammad Awais Ali. All rights reserved
        </div>
      </footer>
    </>
  );
}