import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <div className="page-container section bg-white animate-fade-up">
      <div className="container">
        
        <div className="registration-header text-center mb-5">
          <h1 className="heading-lg text-gradient">Workshop Registration</h1>
          <p className="text-muted mt-3 text-lg">
            To Register: {' '}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4lxwwwQwC-WYMlOokSel1N_lEUm9QdgBidXinf2XGYgr_rg/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginLeft: '10px' }}
            >
              Click Here
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Eligibility Criteria */}
          <div className="info-card">
            <h3 className="card-title">Eligibility Criteria</h3>
            <p className="card-text">
              The workshop is open to UG/PG students, research scholars, faculty members, clinicians, and industry professionals interested in applied and computational mathematics, biomedical imaging, healthcare AI, quantum technologies, and intelligent healthcare systems.
            </p>
          </div>

          {/* Accommodation */}
          <div className="info-card">
            <h3 className="card-title">Accommodation</h3>
            <p className="card-text">
              Accommodation shall be provided only to the outstation participants on prior request within the campus at nominal charges.
            </p>
          </div>
        </div>

        {/* Important Dates */}
        <div className="table-container mb-5">
          <h3 className="section-title">Important Dates</h3>
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Opening Date for Registration</strong></td>
                  <td>24/07/2026</td>
                </tr>
                <tr>
                  <td><strong>Last Date for Early-Bird Registration</strong></td>
                  <td>15/09/2026</td>
                </tr>
                <tr>
                  <td><strong>Last Date for Late Registration</strong></td>
                  <td>05/10/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Registration Fee */}
        <div className="table-container mb-5">
          <h3 className="section-title">Registration Fee</h3>
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Early-Bird Registration</th>
                  <th>Late Registration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UG/PG Students</td>
                  <td>₹750</td>
                  <td>₹1000</td>
                </tr>
                <tr>
                  <td>Research Scholars</td>
                  <td>₹1000</td>
                  <td>₹1500</td>
                </tr>
                <tr>
                  <td>Faculty / Industrial Delegates</td>
                  <td>₹1500</td>
                  <td>₹2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="awards-section mb-5">
          <h3 className="section-title text-center" style={{ width: '100%' }}>Awards and Recognition</h3>
          <div className="about-block mx-auto" style={{ maxWidth: '900px' }}>
            <p className="about-text">
              To encourage active learning and participation, interactive quizzes and engagement activities will be conducted throughout the workshop. Participant performance will be evaluated based on quiz scores, participation in discussions, involvement in hands-on sessions, and overall engagement during the five-day program.
            </p>
            <p className="about-text">
              On the valedictory session, outstanding participants will be recognized with the following awards:
            </p>
            <ul className="awards-list">
              <li><span className="award-icon">🏆</span> <strong>QMI Young Scholar Award</strong> (UG/PG Students)</li>
              <li><span className="award-icon">🏆</span> <strong>QMI Research Excellence Award</strong> (Research Scholars)</li>
              <li><span className="award-icon">🏆</span> <strong>QMI Distinguished Professional Award</strong> (Faculty Members and Industry Professionals)</li>
            </ul>
            <p className="about-text mt-3">
              The awardees will receive a memento and a certificate of recognition in appreciation of their active participation and academic excellence demonstrated during the workshop.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="notice-box text-center">
          <h4 className="notice-title">🚨 Important Notice</h4>
          <p className="notice-text">Seats are limited - Register early to secure your spot!</p>
        </div>

      </div>
    </div>
  );
};

export default Registration;
