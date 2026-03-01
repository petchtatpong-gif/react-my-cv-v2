import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaArrowLeft
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiVercel } from 'react-icons/si';
import { MdLocationOn, MdSchool } from 'react-icons/md';
import profileImg from '../assets/profile2.jpg';
import dropboxImg from '../assets/dropbox.png';
import stripeImg from '../assets/stripe.png';
import clickupImg from '../assets/clickup.png';
import './MyPageA.css';

function MyPageA() {
  const navigate = useNavigate();

  const skills = [
    { icon: <FaReact />, name: 'React', level: 90 },
    { icon: <FaJs />, name: 'JavaScript', level: 85 },
    { icon: <FaHtml5 />, name: 'HTML5', level: 95 },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 88 },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 80 },
    { icon: <FaNodeJs />, name: 'Node.js', level: 70 },
    { icon: <FaGitAlt />, name: 'Git', level: 85 },
    { icon: <SiFirebase />, name: 'Firebase', level: 72 },
  ];

  const experiences = [
    {
      logo: dropboxImg,
      company: 'Dropbox',
      role: 'Senior Frontend Developer',
      period: '2022 - Present',
      desc: 'Led the redesign of the main dashboard UI, improving performance by 40% and user engagement by 25%.',
    },
    {
      logo: stripeImg,
      company: 'Stripe',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      desc: 'Built reusable component library used across 5 product teams. Integrated complex payment UI flows.',
    },
    {
      logo: clickupImg,
      company: 'ClickUp',
      role: 'Junior Developer',
      period: '2018 - 2020',
      desc: 'Developed interactive task management features and collaborated in agile sprint cycles.',
    },
  ];

  return (
    <div className="pagea-container">
      {/* Sidebar */}
      <aside className="pagea-sidebar">
        {/* Back Button */}
        <button className="back-btn-a" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

        {/* Profile Photo - click to go home */}
        <div className="pagea-avatar-wrapper" onClick={() => navigate('/')} title="Go to Home">
          <img src={profileImg} alt="Tatpong" className="pagea-avatar" />
          <div className="avatar-home-hint">🏠 Home</div>
        </div>

        <h1 className="pagea-name">Tatpong Srihongthong</h1>
        <h2 className="pagea-title">Software Developer</h2>

        <div className="pagea-contact">
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <span>Bangkok, Thailand</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>tatpong@email.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+66 81 234 5678</span>
          </div>
        </div>

        <div className="pagea-social">
          <a href="#github" className="social-link"><FaGithub /></a>
          <a href="#linkedin" className="social-link"><FaLinkedin /></a>
          <a href="#vercel" className="social-link"><SiVercel /></a>
        </div>

        <div className="pagea-education">
          <h3 className="section-title-side">Education</h3>
          <div className="edu-item">
            <div className="edu-icon"><MdSchool /></div>
            <div>
              <div className="edu-degree">B.Sc. Software / Computer Engineering</div>
              <div className="edu-school">Southeast Asia University</div>
              <div className="edu-year">2014 — 2018</div>
            </div>
          </div>
        </div>

        {/* Switch Page */}
        <button className="switch-btn-a" onClick={() => navigate('/pageB')}>
          Switch to Portfolio B →
        </button>
      </aside>

      {/* Main Content */}
      <main className="pagea-main">
        {/* About */}
        <section className="pagea-section">
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider"></div>
          <p className="about-text">
            Passionate Software Developer with 6+ years of experience crafting beautiful,
            performant, and accessible web applications. I thrive at the intersection of
            design and code, turning complex problems into elegant, user-friendly solutions.
            Graduate of Southeast Asia University, B.Sc. Software / Computer Engineering.
            Always learning, always building.
          </p>
        </section>

        {/* Skills */}
        <section className="pagea-section">
          <h2 className="section-heading">Skills</h2>
          <div className="section-divider"></div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="skill-level">{skill.level}%</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="pagea-section">
          <h2 className="section-heading">Experience</h2>
          <div className="section-divider"></div>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <img src={exp.logo} alt={exp.company} className="exp-logo" />
                <div className="exp-content">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyPageA;
