import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [roleText, setRoleText] = useState('');
  const fullText = 'Ashi Jain';
  const fullRole = 'Full Stack Developer';

  useEffect(() => {
    setIsVisible(true);
    
    let currentIndex = 0;
    const nameTypingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(nameTypingInterval);
      }
    }, 100);

    setTimeout(() => {
      let roleIndex = 0;
      const roleTypingInterval = setInterval(() => {
        if (roleIndex <= fullRole.length) {
          setRoleText(fullRole.slice(0, roleIndex));
          roleIndex++;
        } else {
          clearInterval(roleTypingInterval);
        }
      }, 80);
    }, fullText.length * 100 + 200);

    return () => clearInterval(nameTypingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">{displayedText}<span className="animate-blink">|</span></span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-6">
          {roleText}<span className={roleText.length === fullRole.length ? 'hidden' : 'animate-blink'}>|</span>
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
          Detail-oriented developer with expertise in MERN Stack, building innovative web applications with modern technologies
        </p>
        
        <div className="flex gap-4 justify-center mb-8 animate-fade-in-delay-3">
          <a href="https://drive.google.com/file/d/1sgukgRf77zs_Nb4kuKR_cWv1U849i0KQ/view?usp=sharing" target='blank' className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105">
            <FileText size={20} />
            View Resume
          </a>
          <a href="https://github.com/Ashi-Jain07" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105">
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in-delay-4">
          <a href="https://www.linkedin.com/in/ashi-jain-79722a210/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/Ashi-Jain07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="mailto:jainashi660@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;