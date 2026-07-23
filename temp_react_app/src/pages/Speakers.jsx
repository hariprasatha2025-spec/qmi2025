import React from 'react';
import { ProfileCard } from '../components/Cards';

const Speakers = () => {
  const speakersList = [
    { name: "Dr. Deepak Joshi", role: "Associate Professor", org: "Centre for Biomedical Engineering, IIT New Delhi", image: "/Deepak Joshi.jpg" },
    { name: "Dr. Jayakumar Vaithiyashankar", role: "Founder & CEO", org: "IBM Educator, Anuthantra Private Limited", image: "/jayakumar.jpeg" },
    { name: "Dr. Karthik C", role: "Assistant Professor", org: "School of Interdisciplinary Design & Innovation, IIITDM Kancheepuram", image: "/Karthik C.jpeg" },
    { name: "Dr. Karthikeyan Damodharan", role: "Director", org: "Department of Vascular & Interventional Radiology, MIOT International", image: "/Karthikeyan Dhamodharan.png" },
    { name: "Dr. Manas Ranjan Prusty", role: "Associate Professor", org: "School of Computer Science & Engineering, VIT Chennai", image: "/Manas ranjan.jpg" },
    { name: "Dr. Manish Sharma", role: "Founder & CEO", org: "Chief Scientific Officer, Imaging Endpoints", image: "/Manish sharma.png" },
    { name: "Dr. Neha Dahiya", role: "Scientist D", org: "Division of Implementation Research, ICMR New Delhi", image: "/dr neha dahiya.png" },
    { name: "Dr. Nitika C. Panakkal", role: "Associate Professor", org: "Department of Medical Imaging Technology, MAHE", image: "/IMG_2963.jpg" },
    { name: "Mr. Pon Maa Kishan A", role: "Founder & CEO of Sukish", org: "Technology Transfer Officer, VIT Chennai", image: "/Pon Maa Kishan.jpg" },
    { name: "Dr. Priyanka Kokil", role: "Associate Professor", org: "Department of ECE, IIITDM Kancheepuram", image: "/Priyaka Kokil.jpeg" },
    { name: "Prof. G. Raghavan", role: "Professor & Director", org: "School of Quantum Technology, DIAT Pune", image: "/Dr Raghavan.jpg" },
    { name: "Dr. Ramya Natarajan", role: "Oncopathologist & Head", org: "Neuberg Diagnostics Private Limited, Chennai", image: "/Ramya Natarajan.jpg" },
    { name: "Mr. Sabarivel R", role: "Regulatory Affairs Associate", org: "RegTrac, Tamil Nadu", image: "/Sabarivel.png" },
    { name: "Col. Sai Shankar P", role: "Founder", org: "QClairvoyance Quantum Labs Pvt. Ltd., Hyderabad", image: "/sai shankar.jpg" },
    { name: "Dr. S. Sountharrajan", role: "Professor", org: "Amrita School of Computing, Amrita Vishwa Vidyapeetham", image: "/SR Photo.jpeg" },
    { name: "Dr. Tarun Kumar", role: "Project Engineer", org: "Quantum Technologies Lab, C-DAC Mohali", image: "/tarun kumar.png" },
    { name: "Dr. Taruna Madan Gupta", role: "Scientist G & Head", org: "Division of Development Research, ICMR New Delhi", image: "/taruna1.jpg" },
    { name: "Dr. Vikram Patil", role: "Professor & Vice Principal", org: "Department of Radio Diagnosis, JSS Medical College", image: "/vikram patel.png" }
  ];

  return (
    <div className="page-container section bg-white">
      <div className="container">
        <h2 className="section-title text-center" style={{ width: '100%' }}>Invited Speakers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {speakersList.map((speaker, idx) => (
            <ProfileCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
