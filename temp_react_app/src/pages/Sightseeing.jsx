import React from 'react';
import './Sightseeing.css';

const Sightseeing = () => {
  const destinations = [
    {
      name: "Mahabalipuram",
      distance: "32 KM from VIT Chennai",
      link: "https://traveltriangle.com/blog/places-to-visit-in-mahabalipuram/",
      image: "/mahabalipuram.webp"
    },
    {
      name: "Vandalur Zoo",
      distance: "8.2 KM from VIT Chennai",
      link: "https://world-tourist-places.blogspot.com/2011/11/vandalur-zoo.html",
      image: "/vz.jpg"
    },
    {
      name: "Marina Mall",
      distance: "10 KM from VIT Chennai",
      link: "https://www.instagram.com/marinamallchennai/",
      image: "/mm.jpg"
    },
    {
      name: "Blue Flag Beach",
      distance: "11 KM from VIT Chennai",
      link: "https://www.instagram.com/p/DHnzbMWSYPQ/?hl=en",
      image: "/beach.jpg"
    },
    {
      name: "Pondicherry",
      distance: "126 KM from VIT Chennai",
      link: "https://pondicherrytourism.co.in/places-to-visit-in-pondicherry",
      image: "/pondy.jpg"
    },
    {
      name: "Kanchipuram",
      distance: "58 KM from VIT Chennai",
      link: "https://www.thrillophilia.com/destinations/kanchipuram/places-to-visit",
      image: "/kanchi.webp"
    },
    {
      name: "Marina Beach",
      distance: "34 KM from VIT Chennai",
      link: "https://traveltriangle.com/blog/places-to-visit-near-marina-beach/",
      image: "/beach.avif"
    },
    {
      name: "DakshinaChitra",
      distance: "19 KM from VIT Chennai",
      link: "https://www.tamilnadutourism.com/attractions/arts-museum/dakshinaChitra-heritage-museum.php",
      image: "/dak.jpg"
    },
    {
      name: "Valluvar Kottam",
      distance: "36 KM from VIT Chennai",
      link: "https://chennaitourism.travel/valluvar-kottam-monument-chennai",
      image: "/kottam.jpg"
    }
  ];

  return (
    <div className="page-container section bg-white animate-fade-up">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="section-title text-center" style={{ width: '100%' }}>Sightseeing</h2>
          <p className="text-muted text-lg mt-3">Nearby tourist destinations around Chennai</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, idx) => (
            <div key={idx} className="sightseeing-card">
              <div className="sightseeing-img-wrapper">
                <img src={dest.image} alt={dest.name} className="sightseeing-img" />
                <div className="sightseeing-overlay">
                  <a href={dest.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Know More
                  </a>
                </div>
              </div>
              <div className="sightseeing-info">
                <h3 className="sightseeing-name">{dest.name}</h3>
                <p className="sightseeing-distance">{dest.distance}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sightseeing;
