import { Github, Linkedin, Mail, Phone, MapPin} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <div className="bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-700">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="mailto:jainashi660@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition-all transform hover:scale-105">
              <Mail className="text-purple-400" size={32} />
              <span className="text-white font-semibold">Email</span>
              <span className="text-gray-400 text-sm text-center">jainashi660@gmail.com</span>
            </a>

            <a href="tel:+918109660997" className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition-all transform hover:scale-105">
              <Phone className="text-purple-400" size={32} />
              <span className="text-white font-semibold">Phone</span>
              <span className="text-gray-400 text-sm">+91 8109660997</span>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl">
              <MapPin className="text-purple-400" size={32} />
              <span className="text-white font-semibold">Location</span>
              <span className="text-gray-400 text-sm text-center">Bhopal, MP</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com/Ashi-Jain07" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900 rounded-full hover:bg-purple-600 transition-all transform hover:scale-110">
              <Github className="text-white" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ashi-jain-79722a210/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900 rounded-full hover:bg-purple-600 transition-all transform hover:scale-110">
              <Linkedin className="text-white" size={24} />
            </a>
            <a href="mailto:jainashi660@gmail.com" className="p-4 bg-gray-900 rounded-full hover:bg-purple-600 transition-all transform hover:scale-110">
              <Mail className="text-white" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;