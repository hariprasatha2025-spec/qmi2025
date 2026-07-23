import React from 'react';
import './HowToReach.css';

const HowToReach = () => {
  const travelMethods = [
    {
      title: "By Air",
      description: "Chennai is served by the Chennai International Airport (MAA), with both domestic and international terminals.",
      points: [
        { icon: "✈️", text: "Taxi: Prepaid and app-based taxi services like Uber and Ola are available. The drive to VIT Chennai takes 30–45 minutes." },
        { icon: "🚌", text: "Public Transport: MTC buses and suburban trains are also available but may be less convenient if traveling with luggage." }
      ],
      link: "https://moovitapp.com/tripplan/chennai-4612/poi/UniversityVellore%20Institute%20of%20Technology%20%5BVIT%20University%5D%20-%20Chennai%20Campus,%20Chengalpattu/Chennai%20International%20Airport%20%28MAA%29,%20Chengalpattu/itinerary/en?customerId=4908&ref=1&af_sub8=%2Findex%2Fen%2Fpublic_transit-Vit_University_Chennai_Campus-Chennai-site_17102726-4612&af_sub9=Search%20bar%20button&poiType=site&fll=12.981806_80.160997&tll=12.842605_80.152684&metroSeoName=Chennai",
      image: "/airport.jpg",
      reverse: false
    },
    {
      title: "By Train",
      description: "Chennai has two major railway stations: Chennai Central and Egmore. Both are well connected to major Indian cities.",
      points: [
        { icon: "🚆", text: "From Chennai Central: Taxis and metro services are available. Approx. 45–60 minutes to VIT Chennai." },
        { icon: "🚆", text: "From Egmore: Well connected by suburban trains and buses. Travel time 40–50 minutes." }
      ],
      link: "https://moovitapp.com/tripplan/chennai-4612/poi/UniversityVellore%20Institute%20of%20Technology%20%5BVIT%20University%5D%20-%20Chennai%20Campus,%20Chengalpattu/Chennai%20Central/en?customerId=4908&ref=1&af_sub8=%2Findex%2Fen%2Fpublic_transit-Vit_University_Chennai_Campus-Chennai-site_17102726-4612&af_sub9=Search%20bar%20button&poiType=site&tll=12.842605_80.152684&metroSeoName=Chennai&fll=13.08353_80.274202",
      image: "/railway.jpg",
      reverse: true
    },
    {
      title: "By Bus",
      description: "Chennai Mofussil Bus Terminus (CMBT), one of Asia’s largest bus stations, connects Chennai with many South Indian cities. Kalaignar Centenary Bus Terminus (Kilambakkam): A new modern terminus in South Chennai, closer to VIT. Travel time: ~25–35 minutes by taxi/auto or MTC buses.",
      points: [
        { icon: "🚌", text: "Local Buses: Frequent MTC buses connect CMBT to various parts of the city." },
        { icon: "🚖", text: "Taxi/Auto: Prepaid taxis and Ola/Uber are available outside the bus terminus. Approx. 40–60 minutes to VIT Chennai." }
      ],
      link: "https://moovitapp.com/tripplan/chennai-4612/poi/UniversityVellore%20Institute%20of%20Technology%20%5BVIT%20University%5D%20-%20Chennai%20Campus,%20Chengalpattu/t/en?customerId=4908&ref=1&af_sub8=%2Findex%2Fen%2Fpublic_transit-Vit_University_Chennai_Campus-Chennai-site_17102726-4612&af_sub9=Search%20bar%20button&poiType=site&tll=12.842605_80.152684&metroSeoName=Chennai",
      image: "/bus.webp",
      reverse: false
    }
  ];

  return (
    <div className="page-container section bg-white animate-fade-up">
      <div className="container">
        <h2 className="section-title text-center" style={{ width: '100%', marginBottom: '4rem' }}>How to Reach</h2>

        {travelMethods.map((method, idx) => (
          <div key={idx} className={`travel-section ${method.reverse ? 'reverse' : ''}`}>
            <div className="travel-content">
              <h3 className="travel-title">{method.title}</h3>
              <p className="travel-desc">{method.description}</p>
              
              <ul className="travel-points">
                {method.points.map((point, i) => (
                  <li key={i}>
                    <span className="point-icon">{point.icon}</span>
                    <span className="point-text">{point.text}</span>
                  </li>
                ))}
              </ul>
              
              <a href={method.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-3">
                Click here to see the routes
              </a>
            </div>
            
            <div className="travel-image-container">
              <img src={method.image} alt={method.title} className="travel-image" />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HowToReach;
