import React from 'react';
import { Link } from 'react-router-dom';

const PastEvents = () => {
  return (
    <div className="page-container section bg-white animate-fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5" style={{ width: '100%' }}>Past Events</h2>

        <div className="bg-slate-50 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center transition-transform hover:-translate-y-2 hover:shadow-md">
          <div className="w-full md:w-1/3 text-center">
            <img 
              src="/logo1.png" 
              alt="QMI 2025" 
              className="w-full h-auto max-h-[250px] object-contain rounded-xl"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold text-slate-800 mb-2">QMI 2025</h3>
            <p className="text-blue-600 font-medium mb-4">
              International Workshop on Quantum Mathematics and Imaging for Smart Manufacturing and Industry 4.0
            </p>
            
            <p className="text-slate-600 mb-3 leading-relaxed">
              QMI 2025 was a five-day international workshop organized by the Department of Mathematics, School of Advanced Sciences, VIT Chennai. The workshop brought together leading researchers, academicians, industry experts, and students working in the fields of quantum mathematics, artificial intelligence, imaging technologies, quantum computing, cryptography, and smart manufacturing.
            </p>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              The event featured keynote lectures, invited talks, technical sessions, discussions, and networking opportunities that fostered interdisciplinary research and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/bro.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                View Brochure
              </a>
              <Link to="/gallery" className="btn btn-outline">
                View Gallery
              </Link>
              <Link to="/awards" className="btn btn-outline">
                Awards & Recognition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
