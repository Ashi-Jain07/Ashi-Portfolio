import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'YouTube Clone',
      tech: 'React, Node.js, Express, MongoDB',
      description: 'Developed a YouTube-like video-sharing platform with React, enabling seamless navigation and an engaging user interface. Integrated a secure backend using Node.js, Express, and MongoDB for user authentication, video management, and personalized channel creation.',
      github: 'https://github.com/Ashi-Jain07/YoutubeClone.git',
      date: 'Oct 2024'
    },
    {
      title: 'ShoppyGlobe - E-Commerce Application',
      tech: 'React, Node.js, Express, MongoDB',
      description: 'Built ShoppyGlobe, a dynamic e-commerce platform delivering seamless navigation and a user-friendly shopping experience. Implemented secure user authentication to restrict cart access and enable personalized shopping for authenticated users.',
      github: 'https://github.com/Ashi-Jain07/ShoppyGlobe---Ecommerce-Application.git',
      date: 'Aug 2024'
    },
    {
      title: 'Weather Forecast Application',
      tech: 'HTML, CSS, JavaScript',
      description: 'Developed a responsive weather forecast website providing real-time weather information for multiple locations. Integrated the OpenWeatherMap API to display current conditions, temperature, humidity, wind speed, and a 5-day forecast dynamically.',
      github: 'https://github.com/Ashi-Jain07/Weather-Forecast-Project.git',
      date: 'Apr 2024'
    }
  ];

  return (
    <section id="projects" className=" bg-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <Code className="text-purple-400" size={28} />
                <span className="text-xs text-gray-500">{project.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3">{project.tech}</p>
              <p className="text-gray-400 text-sm mb-4 grow">{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;