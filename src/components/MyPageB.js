import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaPython, FaDocker, FaDatabase, FaServer, FaLinux,
  FaArrowLeft, FaMapMarkerAlt, FaUniversity, FaChevronRight
} from 'react-icons/fa';
import { SiPostgresql, SiRedis, SiKubernetes, SiNginx } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';
import elasticImg from '../assets/elastic.png';
import profileImg from '../assets/profile2.jpg';
import paychexImg from '../assets/paychex.png';
import stripeImg from '../assets/stripe.png';
import './MyPageB.css';

function MyPageB() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { icon: <FaPython />, name: 'Python', level: 92, color: '#39ff14' },
    { icon: <FaDatabase />, name: 'SQL', level: 88, color: '#00e5ff' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', level: 85, color: '#39ff14' },
    { icon: <FaDocker />, name: 'Docker', level: 82, color: '#00e5ff' },
    { icon: <SiKubernetes />, name: 'Kubernetes', level: 75, color: '#39ff14' },
    { icon: <SiRedis />, name: 'Redis', level: 80, color: '#00e5ff' },
    { icon: <FaLinux />, name: 'Linux', level: 87, color: '#39ff14' },
    { icon: <SiNginx />, name: 'Nginx', level: 78, color: '#00e5ff' },
  ];

  const experiences = [
    {
      logo: elasticImg,
      company: 'Elastic',
      role: 'Senior Backend Engineer',
      period: '2021 - Present',
      desc: 'Architected distributed search pipeline processing 1B+ daily events. Reduced query latency by 60% through optimization.',
      tag: 'Current',
    },
    {
      logo: paychexImg,
      company: 'Paychex',
      role: 'Backend Developer',
      period: '2019 - 2021',
      desc: 'Designed payroll processing microservices handling 500K transactions/day with 99.99% uptime SLA.',
      tag: '2 yrs',
    },
    {
      logo: stripeImg,
      company: 'Stripe',
      role: 'Junior Backend Engineer',
      period: '2017 - 2019',
      desc: 'Built fraud detection API endpoints and maintained high-availability payment processing services.',
      tag: '2 yrs',
    },
  ];

  const certifications = [
    { icon: <MdSecurity />, name: 'AWS Solutions Architect', year: '2023' },
    { icon: <FaDocker />, name: 'CKA Kubernetes', year: '2022' },
    { icon: <FaServer />, name: 'HashiCorp Terraform', year: '2021' },
  ];

  const tabs = ['about', 'skills', 'experience'];

  return (
    <div className="pageb-container">

      {/* ── TOP NAV ── */}
      <nav className="pageb-nav">
        <button className="pageb-back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <div className="pageb-nav-tabs">
          {tabs.map(t => (
            <button
              key={t}
              className={`pageb-tab ${activeTab === t ? 'pageb-tab--active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <button className="pageb-switch-btn" onClick={() => navigate('/pageA')}>
          Portfolio A →
        </button>
      </nav>

      {/* ── HERO BANNER ── */}
      <div className="pageb-hero">
        <div className="pageb-hero-glow" />
        <div className="pageb-hero-content">
          <div className="pageb-avatar-wrap" onClick={() => navigate('/')} title="Home">
            <img src={profileImg} alt="Tatpong" className="pageb-avatar" />
            <div className="pageb-avatar-ring" />
            <span className="pageb-avatar-hint">🏠</span>
          </div>
          <div className="pageb-hero-text">
            <p className="pageb-hero-label">{/* Software Developer */}</p>
            <h1 className="pageb-hero-name">Tatpong<br />Srihongthong</h1>
            <div className="pageb-hero-tags">
              <span className="pageb-tag"><FaUniversity /> Southeast Asia University</span>
              <span className="pageb-tag"><FaMapMarkerAlt /> Bangkok, Thailand</span>
            </div>
            <div className="pageb-hero-contacts">
              <a href="mailto:tatpong@email.com" className="pageb-contact-chip"><FaEnvelope /> tatpong@email.com</a>
              <a href="tel:+66812345678" className="pageb-contact-chip"><FaPhone /> +66 81 234 5678</a>
              <a href="#github" className="pageb-contact-chip"><FaGithub /> GitHub</a>
              <a href="#linkedin" className="pageb-contact-chip"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
        {/* neon grid lines */}
        <div className="pageb-grid-lines" aria-hidden="true">
          {[...Array(6)].map((_, i) => <div key={i} className="pageb-grid-line" />)}
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="pageb-body">

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="pageb-panel pageb-about-panel">
            <div className="pageb-about-bio">
              <h2 className="pageb-panel-title"><span className="neon-bracket">&lt;</span> About <span className="neon-bracket">/&gt;</span></h2>
              <p className="pageb-bio-text">
                Passionate Software Developer with 7+ years of experience building scalable,
                fault-tolerant distributed systems. Specialized in high-throughput microservices,
                database optimization, and robust cloud infrastructure. Graduate of
                <span className="neon-highlight"> Southeast Asia University</span>,
                B.Sc. Software/Computer Engineering. I believe great backend engineering
                is invisible — it just works.
              </p>
              <div className="pageb-stats-row">
                <div className="pageb-stat"><span className="pageb-stat-num">7+</span><span className="pageb-stat-label">Years Exp.</span></div>
                <div className="pageb-stat"><span className="pageb-stat-num">50+</span><span className="pageb-stat-label">Projects</span></div>
                <div className="pageb-stat"><span className="pageb-stat-num">3</span><span className="pageb-stat-label">Certs</span></div>
                <div className="pageb-stat"><span className="pageb-stat-num">1B+</span><span className="pageb-stat-label">Events/day</span></div>
              </div>
            </div>

            <div className="pageb-about-right">
              <div className="pageb-edu-card">
                <h3 className="pageb-edu-title">🎓 Education</h3>
                <div className="pageb-edu-detail">
                  <div className="pageb-edu-degree">B.Sc. Software / Computer Engineering</div>
                  <div className="pageb-edu-school">Southeast Asia University</div>
                  <div className="pageb-edu-year">2014 — 2018</div>
                </div>
              </div>
              <div className="pageb-cert-list">
                <h3 className="pageb-cert-title">🏅 Certifications</h3>
                {certifications.map((c, i) => (
                  <div key={i} className="pageb-cert-row">
                    <span className="pageb-cert-icon">{c.icon}</span>
                    <span className="pageb-cert-name">{c.name}</span>
                    <span className="pageb-cert-year">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="pageb-panel">
            <h2 className="pageb-panel-title"><span className="neon-bracket">&lt;</span> Skills <span className="neon-bracket">/&gt;</span></h2>
            <div className="pageb-skills-grid">
              {skills.map((s, i) => (
                <div key={i} className="pageb-skill-card" style={{ '--accent': s.color }}>
                  <div className="pageb-skill-top">
                    <span className="pageb-skill-icon">{s.icon}</span>
                    <span className="pageb-skill-name">{s.name}</span>
                    <span className="pageb-skill-pct">{s.level}%</span>
                  </div>
                  <div className="pageb-skill-track">
                    <div className="pageb-skill-fill" style={{ width: `${s.level}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="pageb-panel">
            <h2 className="pageb-panel-title"><span className="neon-bracket">&lt;</span> Experience <span className="neon-bracket">/&gt;</span></h2>
            <div className="pageb-exp-grid">
              {experiences.map((exp, i) => (
                <div key={i} className="pageb-exp-card">
                  <div className="pageb-exp-top">
                    <img src={exp.logo} alt={exp.company} className="pageb-exp-logo" />
                    <span className="pageb-exp-tag">{exp.tag}</span>
                  </div>
                  <div className="pageb-exp-role">{exp.role}</div>
                  <div className="pageb-exp-company">{exp.company}</div>
                  <div className="pageb-exp-period">{exp.period}</div>
                  <p className="pageb-exp-desc">{exp.desc}</p>
                  <div className="pageb-exp-arrow"><FaChevronRight /></div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ── FOOTER ── */}
      <footer className="pageb-footer">
        <span>Tatpong Srihongthong · Southeast Asia University · Software/Computer Engineering</span>
        <button className="pageb-home-link" onClick={() => navigate('/')}>← Home</button>
      </footer>

    </div>
  );
}

export default MyPageB;
