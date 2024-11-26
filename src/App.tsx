import React from 'react';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="../assets/dp1.jpg"
            alt="Background" 
            className="object-cover w-full h-full opacity-10"
          />
        </div>
        <div className="relative z-10 w-full max-w-6xl px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="text-center md:text-left">
              <h1 className="mb-4 text-5xl font-bold md:text-7xl">K.H Kevin Nimneth</h1>
              <p className="mb-8 text-xl text-gray-300 md:text-2xl">Software Engineering Undergraduate</p>
              <p className="text-lg text-blue-400 md:text-xl">SLTC Research University</p>
            </div>
            <div className="relative group">
              <div className="absolute transition duration-1000 rounded-full opacity-75 -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 blur group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 overflow-hidden border-2 rounded-full md:w-80 md:h-80 border-white/10">
                <img 
                  src="/profile.jpg"
                  alt="Kevin Nimneth"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-6xl px-4 py-20 mx-auto md:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-gray-300">
            I am a passionate Software Engineering student at SLTC Research University, dedicated to creating innovative solutions through code. My journey in technology is driven by a deep curiosity for software development and a commitment to continuous learning.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-20 md:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard icon={<Code2 className="w-8 h-8" />} title="Programming" description="Java, Python, JavaScript, TypeScript" />
            <SkillCard icon={<Layout className="w-8 h-8" />} title="Frontend" description="React, HTML5, CSS3, Tailwind" />
            <SkillCard icon={<Server className="w-8 h-8" />} title="Backend" description="Node.js, Express, REST APIs" />
            <SkillCard icon={<Database className="w-8 h-8" />} title="Database" description="MySQL, MongoDB, PostgreSQL" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <section id="education" className="max-w-6xl px-4 py-20 mx-auto md:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center">Education</h2>
        <div className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-4">
            <Cpu className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
              <p className="text-gray-300">SLTC Research University</p>
              <p className="text-blue-400">Current</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 transition-colors rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;