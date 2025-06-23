
import { useState } from 'react';
import { Upload, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Photo Upload Section */}
          <div className="relative group">
            <div className="w-61 h-64 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                 <img
  src="/profileImage.jpeg"  
  alt="Your Name bb"
  className="w-full h-full object-cover rounded-full"
/>

              </div> 
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="absolute inset-0 rounded-full bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Patrick
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Mugeni
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 font-light">
              Full-Stack Developer
            </div>
            
            <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Turning ideas into innovative digital solutions
            </div>
            
            <div className="text-base text-teal-400 font-medium">
              📍 Virtual
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 animate-fade-in delay-300">
            <a 
              href="#contact" 
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>
            <a href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a>
            {/* <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </a> */}
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in delay-500">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-400/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
