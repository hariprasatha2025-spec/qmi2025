import React from 'react';
import { FeatureCard } from '../components/Cards';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: "Expert Talks & Hands-on Sessions",
      text: "18 Expert Talks delivered by distinguished academicians, clinicians, and industry experts, complemented with interactive hands-on training sessions.",
      bgImage: "/01-.png"
    },
    {
      title: "Daily Quiz and Awards",
      text: "Assess your understanding each day through quizzes with exciting awards for outstanding performers.",
      bgImage: "/02-.png"
    },
    {
      title: "Panel Discussions and Expert Interaction",
      text: "Interact with leading academicians, clinicians, and industry experts through engaging panel discussions and interactive Q&A sessions.",
      bgImage: "/03-.png"
    },
    {
      title: "Research & Innovation",
      text: "Exposure to Biomedical Imaging, AI, and Quantum Technologies Sessions on Ethics, Compliance, Patents, and Commercialization.",
      bgImage: "/04-.png"
    },
    {
      title: "Research Networking",
      text: "Networking Opportunities with Leading Researchers and Healthcare Experts.",
      bgImage: "/05-.png"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container animate-fade-up">
          <div className="hero-logos">
            <img src="/QMI 2026.png" alt="QMI Logo" className="hero-logo" />
            <img src="/blue-vit-logo.png" alt="VIT Logo" className="hero-logo" />
            <img src="/iic.jpg" alt="IIC Logo" className="hero-logo" />
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-subtitle">2<sup>nd</sup> National Workshop on</span>
              <span className="text-gradient">“Quantum Mathematics and Biomedical Imaging for Intelligent Healthcare 5.0”</span>
            </h1>
            <div className="hero-dates">
              <p className="hero-edition">QMI – 2026</p>
              <p className="hero-date-text">📅 October 12 – 16, 2026</p>
            </div>
            
            <a href="/QMI 2026 Brochure.pdf" target="_blank" rel="noreferrer" className="btn btn-primary mt-4">
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Deadline Banner */}
      <div className="deadline-banner">
        <div className="scrolling-text">
          <p>🚨 Registration for QMI 2026 will be opened on: <u>July 24, 2026</u> 🚨 Registration for QMI 2026 will be opened on: <u>July 24, 2026</u></p>
        </div>
      </div>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="about-block">
              <h2 className="section-title">ABOUT QMI 2026</h2>
              <p className="about-text">
                The 2<sup>nd</sup> National Workshop on “Quantum Mathematics and Biomedical Imaging for Intelligent Healthcare 5.0 (QMI 2026)” aims to bring together researchers, clinicians, industry experts, faculty members, and students to explore emerging advances in biomedical imaging, healthcare analytics, artificial intelligence, and quantum technologies.
              </p>
              <p className="about-text">
                Biomedical imaging modalities such as MRI, CT, PET, SPECT, ultrasound, and digital pathology generate vast amounts of heterogeneous data that require sophisticated analysis for accurate disease diagnosis and treatment planning.
              </p>
            </div>
            
            <div className="about-block">
              <h2 className="section-title">About VIT Chennai</h2>
              <p className="about-text">
                VIT Chennai was established in 2010 and has since become a beacon of excellence in higher education. Spearheaded by Vice-President Dr. G. V. Selvam, a pioneering visionary who laid the foundation of VIT Chennai, he is an insightful architect of its evergreen campus and an ingenious leader whose comprehensive vision and mission have shaped its growth.
              </p>
              <p className="about-text">
                Strategically located in the capital city of Tamil Nadu, VIT Chennai is a globally engaged, competitive, and research-enriched institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="section section-bg-light">
        <div className="container">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Key Insights from the Workshop</h2>
          <div className="grid grid-cols-3">
            {features.map((feature, idx) => (
              <FeatureCard 
                key={idx}
                title={feature.title}
                text={feature.text}
                bgImage={feature.bgImage}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Sponsored By</h2>
          <div className="sponsors-grid">
            <img src="/anrf.jpg" alt="SERB Logo" className="sponsor-logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
