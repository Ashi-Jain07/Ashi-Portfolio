import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className=" bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-purple-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="text-purple-400" />
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Detail-oriented Full Stack Developer with a strong foundation in MERN Stack development, focused on building innovative web applications. Eager to contribute to projects while continuously enhancing skills in modern web technologies.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="text-purple-400" />
              Contact Information
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                +91 8109660997
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                jainashi660@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-400" />
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;