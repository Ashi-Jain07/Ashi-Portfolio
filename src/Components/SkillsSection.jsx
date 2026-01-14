import {Code, Server, Database, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Vitest'],
      color: 'blue'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-400" size={24} />,
      skills: ['Node.js', 'Express.js', 'REST API', 'WebSockets', 'Supertest'],
      color: 'green'
    },
    {
      title: 'Database',
      icon: <Database className="text-yellow-400" size={24} />,
      skills: ['MongoDB'],
      color: 'yellow'
    },
    {
      title: 'DevOps & Tools',
      icon: <Cloud className="text-purple-400" size={24} />,
      skills: ['Git', 'GitHub', 'Microsoft Azure', 'AWS', 'CI/CD', 'Railway'],
      color: 'purple'
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className={`px-4 py-2 bg-gray-800 text-${category.color}-400 rounded-full text-sm border border-gray-700 hover:border-${category.color}-400 transition-all transform hover:scale-110`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Problem Solving', 'Effective Communication', 'Team Collaboration', 'Adaptability'].map((skill, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-gray-800 text-pink-400 rounded-full text-sm border border-gray-700 hover:border-pink-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;