import React from 'react';
import { ProfileCard } from '../components/Cards';

const Organizers = () => {
  const chiefPatron = {
    name: "Dr. G. Viswanathan",
    role: "Founder & Chancellor",
    org: "VIT",
    image: "/viswanathan.jpg"
  };

  const patrons = [
    { name: "Dr. Sankar Viswanathan", role: "Vice-President", org: "VIT", image: "/vpa_small.jpg" },
    { name: "Dr. Sekar Viswanathan", role: "Vice-President", org: "VIT", image: "/vicepresident.jpg" },
    { name: "Dr. G. V. Selvam", role: "Vice-President", org: "VIT", image: "/gvs.jpg" },
    { name: "Dr. V. S. Kanchana Bhaaskaran", role: "Vice-Chancellor", org: "VIT", image: "/vsk.jpg" },
    { name: "Dr. T. Thyagarajan", role: "Pro-Vice Chancellor", org: "VIT Chennai", image: "/tt.jpg" },
    { name: "Dr. K. Sathiyanarayanan", role: "Director", org: "VIT Chennai", image: "/sn.jpg" },
    { name: "Dr. P. K. Manoharan", role: "Additional Registrar", org: "VIT Chennai", image: "/pkm.jpg" }
  ];

  const convenor = {
    name: "Dr. N. Ramesh Babu",
    role: "Assistant Professor",
    org: "VIT Chennai",
    image: "/nrb.jpeg"
  };

  const coConvenors = [
    { name: "Dr. S. Lakshmanan", role: "Associate Professor", org: "VIT Chennai", image: "/laksh.jpg" },
    { name: "Dr. N. Padmaja", role: "Assistant Professor", org: "VIT Chennai", image: "/pn.jpg" },
    { name: "Dr. R. Sriraman", role: "Assistant Professor", org: "VIT Chennai", image: "/sriraman.jpg" }
  ];

  const advisory = [
    { name: "Dr. G. Vinitha", role: "Professor and Dean", org: "School of Advanced Sciences (SAS), VIT Chennai", image: "/dean.jpg" },
    { name: "Dr. A. Manivannan", role: "Associate Professor and Head", org: "Department of Mathematics, VIT Chennai", image: "/hod.jpg" }
  ];

  return (
    <div className="page-container section bg-white">
      <div className="container">
        
        {/* Chief Patron */}
        <div className="organizer-section mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Chief Patron</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center" style={{ display: 'flex' }}>
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <ProfileCard {...chiefPatron} />
            </div>
          </div>
        </div>

        {/* Patrons */}
        <div className="organizer-section mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Patrons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {patrons.map((patron, idx) => (
              <ProfileCard key={idx} {...patron} />
            ))}
          </div>
        </div>

        {/* Convenor */}
        <div className="organizer-section mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Convenor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center" style={{ display: 'flex' }}>
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <ProfileCard {...convenor} />
            </div>
          </div>
        </div>

        {/* Co-Convenors */}
        <div className="organizer-section mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Co-Convenors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            {coConvenors.map((member, idx) => (
              <ProfileCard key={idx} {...member} />
            ))}
          </div>
        </div>

        {/* Advisory */}
        <div className="organizer-section mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Advisory Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {advisory.map((member, idx) => (
              <ProfileCard key={idx} {...member} />
            ))}
          </div>
        </div>

        {/* Organizing Members */}
        <div className="organizer-section mb-5 text-center">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Organizing Members</h2>
          <div className="about-block mx-auto" style={{ maxWidth: '800px', padding: '2rem' }}>
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>
              All faculty members and research scholars of the Department of Mathematics, SAS, VIT Chennai.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Organizers;
