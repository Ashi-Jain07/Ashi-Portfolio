const ExperienceSection = () => {
  const experiences = [
    {
      company: 'GlideX Tech Solutions',
      role: 'Full Stack Developer',
      period: 'Sep 2024 - Present',
      type: 'Virtual',
      highlights: [
        'Developing and maintaining full-stack applications using MERN stack',
        'Collaborating with cross-functional teams to deliver scalable solutions',
        'Implementing cloud services on Azure for deployment and storage',
        'Enhancing application performance and ensuring secure APIs',
        'Writing unit tests for both frontend and backend using Vitest, React Testing Library, and Supertest'
      ]
    },
    {
      company: 'Ermin Automotive',
      role: 'Full Stack Developer - Internship',
      period: 'Dec 2023 - Aug 2024',
      type: 'Virtual',
      highlights: [
        'Developed a website using React to enhance user experience',
        'Built a robust backend for product management',
        'Implemented secure user login and registration features',
        'Utilized Blob storage for uploading product data',
        'Designed a scalable API to accommodate increasing user demands',
        'Established web sockets for real-time updates',
        'Deployed the website on Azure'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Work <span className="text-purple-400">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-102"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-purple-400 text-lg">{exp.company}</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p className="text-sm">{exp.type}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;