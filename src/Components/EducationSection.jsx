import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'NRI Institute Of information Science And Technology, Bhopal',
      cgpa: '8.13/10',
      icon: <GraduationCap className="text-purple-400" size={32} />
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Government Narmada College, Hoshangabad',
      cgpa: '7.21/10',
      icon: <GraduationCap className="text-blue-400" size={32} />
    }
  ];

  return (
    <section id="education" className=" bg-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-purple-400">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105"
            >
              <div className="mb-4">{edu.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-purple-400 font-semibold">CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;