import React from 'react';
import { useNavigate } from 'react-router-dom';
import helloImg from '../assets/hello.png';
import profileImg from '../assets/profile2.jpg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-hero">
        <img src={helloImg} alt="hello" className="hello-img" />
        <h1 className="home-title">Welcome to My CV</h1>
        <p className="home-subtitle">Tatpong Srihongthong — Software Developer</p>
        <p className="home-university">Southeast Asia University</p>
      </div>

      <div className="home-cards">
        {/* PageA Card */}
        <div className="cv-card card-a" onClick={() => navigate('/pageA')}>
          <div className="card-avatar card-avatar-a">
            <img src={profileImg} alt="Tatpong" className="card-photo card-photo-a" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Tatpong</h2>
            <p className="card-role">Software Developer</p>
            <p className="card-univ">Southeast Asia University</p>
            <button className="card-btn btn-a">View Portfolio A →</button>
          </div>
        </div>

        {/* PageB Card */}
        <div className="cv-card card-b" onClick={() => navigate('/pageB')}>
          <div className="card-avatar card-avatar-b">
            <img src={profileImg} alt="Tatpong" className="card-photo card-photo-b" />
          </div>
          <div className="card-info">
            <h2 className="card-name">Srihongthong</h2>
            <p className="card-role">Software Developer</p>
            <p className="card-univ">Southeast Asia University</p>
            <button className="card-btn btn-b">View Portfolio B →</button>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <p>© 2024 Tatpong Srihongthong · Southeast Asia University</p>
      </div>
    </div>
  );
}

export default Home;
