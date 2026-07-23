import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    {
      date: "Day 1 – October 12, 2026",
      events: [
        { time: "9:00 AM – 10:00 AM", title: "Inauguration", speaker: "", venue: "V.O.C Auditorium (Admin Block)" },
        { time: "10:00 AM – 11:00 AM", title: "Mathematics at the Core of Biomedical Imaging", speaker: "Dr. Manas Ranjan Prusty, Associate Professor, SCOPE, Vellore Institute of Technology, Chennai", venue: "AB3-001" },
        { time: "11:30 AM – 12:30 PM", title: "Disease Diagnosis via Multi-modal Imaging", speaker: "Dr. Priyanka Kokil, Associate Professor, Department of Electronics and Communication Engineering, IIITDM, Kancheepuram", venue: "AB3-001" },
        { time: "2:00 PM – 3:00 PM", title: "Histopathological Image Analysis: From Tissue Morphology to Disease Diagnosis", speaker: "Dr. Ramya Natarajan, Oncopathologist & Head Department of Histopathology and Cytology, Neuberg Diagnostics Private Limited, Chennai", venue: "AB3-001" },
        { time: "3:30 PM – 4:30 PM", title: "Discussion with Experts", speaker: "", venue: "AB3-001" }
      ]
    },
    {
      date: "Day 2 – October 13, 2026",
      events: [
        { time: "10:00 AM – 11:00 AM", title: "ML Paradigms for Biomedical Applications", speaker: "Dr. Deepak Joshi, Associate Professor Centre for Biomedical Engineering, IIT Delhi", venue: "AB3-001" },
        { time: "11:30 AM – 12:30 PM", title: "Advances in Interventional Radiology: Clinical Applications, Image-Guided Therapies, and AI-Driven Decision Support", speaker: "Dr. Karthikeyan Damodharan, Director Department of Vascular & Interventional Radiology, MIOT International, Chennai", venue: "AB3-001" },
        { time: "2:00 PM – 3:00 PM", title: "Hands-on Quantum Computing for Brain Tumor Analysis", speaker: "Dr. Tarun Kumar, Project Engineer, Quantum Technologies Lab, C-DAC, Mohali", venue: "AB3-001" },
        { time: "3:30 PM – 4:30 PM", title: "Applications of Medical Imaging in Healthcare", speaker: "Dr. Nitika C. Panakkal, Associate Professor, Department of Medical Imaging Technology, Manipal Academy of Higher Education, Karnataka", venue: "AB3-001" }
      ]
    },
    {
      date: "Day 3 – October 14, 2026",
      events: [
        { time: "10:00 AM – 11:00 AM", title: "Imaging and AI in Healthcare: Challenges and Clinical Validation", speaker: "Dr. Manish Sharma, Chief Scientific Officer Imaging Endpoints, Hyderabad", venue: "AB3-001" },
        { time: "11:30 AM – 12:30 PM", title: "AI in Medical Devices", speaker: "Dr. Karthik C, Assistant Professor School of Interdisciplinary Design and Innovation, IIITDM, Kancheepuram", venue: "AB3-001" },
        { time: "2:00 PM – 3:00 PM", title: "Classical to Quantum Era", speaker: "Dr. Jayakumar Vaithiyashankar, Founder and CEO, Anuthantra Pvt. Ltd. Bengaluru", venue: "AB3-001" },
        { time: "3:30 PM – 4:30 PM", title: "The Future of Quantum Computing in Healthcare", speaker: "Prof. G. Raghavan, Director, School of quantum Technology, DIAT, Pune", venue: "AB3-001" }
      ]
    },
    {
      date: "Day 4 – October 15, 2026",
      events: [
        { time: "10:00 AM – 11:00 AM", title: "How Radiologists Can Read Images?", speaker: "Dr. Vikram Patil, Professor & Vice Principal, Department of Radio-Diagnosis (Radiology), JSS Medical College, Mysuru", venue: "AB3-001" },
        { time: "11:30 AM – 12:30 PM", title: "Application of Quantum Technologies", speaker: "Col. Sai Shankar, Founder and CEO, QClairvoyance Quantum Labs Pvt. Ltd., Hyderabad", venue: "AB3-001" },
        { time: "2:00 PM – 3:00 PM", title: "Quantum Biosensors for Intelligent Healthcare 5.0", speaker: "Dr. S. Sountharrajan, Associate Professor & Chairperson, School of Computing, Amrita Vishwa Vidyapeetham, Chennai", venue: "AB3-001" },
        { time: "3:30 PM – 4:30 PM", title: "ICMR Funding for Biomedical Imaging: Opportunities, Challenges, and Proposal Writing", speaker: "Dr Neha Dahiya, Scientist D, Division of Implementation Research, Indian Council of Medical Research (ICMR), New Delhi", venue: "AB3-001" }
      ]
    },
    {
      date: "Day 5 – October 16, 2026",
      events: [
        { time: "10:00 AM – 11:00 AM", title: "IPR, Patents and Technology Commercialization in Healthcare 5.0", speaker: "Mr. Pon Maa Kishan A, Founder & CEO - Sukish, Technology Transfer Officer, Department of Intellectual Property Strategy, VIT Chennai", venue: "AB3-001" },
        { time: "11:30 AM – 12:30 PM", title: "Ethical Clearance and Human Compliance in Biomedical Imaging", speaker: "Mr. Sabarivel R, Regulatory Affairs Associate, RegTrac, Chennai", venue: "AB3-001" },
        { time: "2:00 PM – 3:00 PM", title: "Translating Biomedical Innovations into Clinical Practice: Opportunities for AI, Medical Devices, and Intelligent Healthcare", speaker: "Dr. Taruna Madan, Scientist G, Head, Division of Development Research, ICMR.", venue: "AB3-001" },
        { time: "3:30 PM – 4:30 PM", title: "Feedback & Valedictory Session", speaker: "", venue: "Nethaji Auditorium (Academic Block 1)" }
      ]
    }
  ];

  return (
    <div className="page-container section bg-white animate-fade-up">
      <div className="container">
        
        <div className="schedule-header text-center mb-5">
          <h1 className="heading-lg text-gradient mb-3">Workshop Schedule</h1>
          <p className="text-muted text-lg mb-2">
            <strong>Venue:</strong> VIT Chennai | <strong>Date:</strong> October 12–16, 2026 | <strong>Time:</strong> 10:00 AM – 4:00 PM
          </p>
          <p className="text-muted mb-4">
            <strong>Faculty Coordinators:</strong> Dr. N. Ramesh Babu, Dr. S. Lakshmanan, Dr. N. Padmaja, Dr. R. Sriraman
          </p>
          <a href="/QMI 2026 Schedule Updated 17-07 (1).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" style={{ backgroundColor: '#0f172a' }}>
            📄 View Full Schedule (PDF)
          </a>
        </div>

        <div className="schedule-timeline">
          {scheduleData.map((day, index) => (
            <div key={index} className="schedule-day mb-5">
              <div className="date-header text-white px-4 py-3 rounded-lg shadow-sm">
                {day.date}
              </div>
              <div className="events-list mt-3">
                {day.events.map((event, idx) => (
                  <div key={idx} className="event-card bg-white p-4 rounded-lg shadow-sm border-l-4">
                    <div className="event-time text-accent font-semibold">{event.time}</div>
                    <div className="event-title text-primary text-xl font-bold mt-1 mb-2">{event.title}</div>
                    {event.speaker && (
                      <div className="speaker text-muted text-sm mb-1">
                        <strong>Speaker:</strong> {event.speaker}
                      </div>
                    )}
                    <div className="event-location text-muted text-sm">
                      <strong>Venue:</strong> {event.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Schedule;
