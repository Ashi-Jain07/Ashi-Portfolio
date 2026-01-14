import {  Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    { name: 'Full Stack Development', org: 'Internshala Trainings' },
    { name: 'Mastering Node.js, Express.js And MongoDB', org: 'Internshala Trainings' },
    { name: 'Building Modern Web Applications Using React', org: 'Internshala Trainings' },
    { name: 'Developing Interactive Websites With JavaScript', org: 'Internshala Trainings' },
    { name: 'Designing Web Pages Using HTML And CSS', org: 'Internshala Trainings' },
    { name: 'Data Structure And Algorithm', org: 'Internshala Trainings' },
    { name: 'Git And GitHub: Mastering Version Control', org: 'Internshala Trainings' }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-purple-400">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105"
            >
              <Award className="text-purple-400 mb-3" size={28} />
              <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;