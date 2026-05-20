import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: "greenpulse",
      num: "01",
      title: "GreenPulse",
      subtitle: "Electricity Consumption Analysis",
      desc: "An end-to-end data pipeline to collect, clean, and analyze household electricity data. Engineered regression models (Random Forest, XGBoost) to forecast daily power consumption, achieving an 88% prediction accuracy. Built a custom interactive dashboard with D3.js to visualize real-time localized energy spikes and optimize grid distribution schedules.",
      tech: ["Python", "Flask", "scikit-learn", "SQLite"],
      gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
      github: "https://github.com/dalavaihemanth/GreenPulse",
      image: "/projects/greenpulse.png"
    },
    {
      id: "sqlspark",
      num: "02",
      title: "SQL Spark",
      subtitle: "Interactive Hackathon Platform",
      desc: "A full-stack backend platform tailored for hosting live SQL hackathons. Built to support simultaneous multi-user participation with a highly scalable robust engine capable of processing 50+ concurrent code submissions seamlessly. Implemented real-time AST parsing for secure SQL query validation and leaderboard synchronization via WebSockets.",
      tech: ["React.js", "Python", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      github: "",
      image: "/projects/sqlspark.png"
    },
    {
      id: "hotelstaff",
      num: "03",
      title: "Hotel Staffing",
      subtitle: "Decision Support System",
      desc: "A Machine Learning-based decision support system designed to forecast hotel occupancy. Optimized staffing requirements utilizing predictive modeling and historical demand analysis. The system reduced overstaffing costs by 22% while maintaining optimal customer service metrics across peak and off-peak seasons.",
      tech: ["Python", "Streamlit", "scikit-learn", "Plotly"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      github: "https://github.com/DalavaiHemanth/hotel_staff_planner",
      image: "/projects/hotelstaff.png"
    },
    {
      id: "fairassign",
      num: "04",
      title: "Fair Assign",
      subtitle: "Automated Exam Duty Scheduler",
      desc: "An intelligent automated invigilation assignment system. It algorithmically eliminates departmental conflicts by ensuring no faculty member is assigned to invigilate exams originating from their own department. Utilized constraint satisfaction programming techniques to generate conflict-free multi-week schedules in seconds.",
      tech: ["React.js", "Python", "Java"],
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      github: "https://github.com/dalavaihemanth/FairAssign",
      image: "/projects/fairassign.png"
    }
  ];

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedId]);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section className="section" id="projects" style={{ zIndex: 10 }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, color: '#fff' }}
        >
          Selected Projects.
          <div style={{ flexGrow: 1, height: '2px', background: 'var(--grad-accent)', marginLeft: '2rem', opacity: 0.5 }} />
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={"card-" + project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="glass glass-card project-card" 
              style={{ 
                padding: '0', 
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="card-image-wrap" style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="proj-thumb" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(5,5,10,0.8))' }}></div>
              </div>

              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <motion.h3 layoutId={"num-" + project.id} className="mono" style={{ fontSize: '1.2rem', fontWeight: 700, opacity: 0.6, background: project.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {project.num}
                  </motion.h3>
                </div>
                
                <div>
                  <motion.h3 layoutId={"title-" + project.id} style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{project.title}</motion.h3>
                  <motion.h4 layoutId={"subtitle-" + project.id} className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{project.subtitle}</motion.h4>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="mono" style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="mono" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>+{project.tech.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 10, 0.95)', backdropFilter: 'blur(20px)' }}
              onClick={() => setSelectedId(null)}
            />
            <motion.div 
              layoutId={"card-" + selectedId}
              className="glass"
              style={{ width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', zIndex: 10, borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10, 15, 25, 0.95)', display: 'flex', flexDirection: 'column' }}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', cursor: 'pointer', padding: '12px', borderRadius: '50%', zIndex: 20 }}
                className="close-btn"
              >
                <FaTimes size={20} />
              </button>

              <div style={{ position: 'relative', height: '450px', width: '100%' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(10, 15, 25, 1))' }}></div>
              </div>

              <div style={{ padding: '0 clamp(2rem, 5vw, 4rem) 4rem', marginTop: '-60px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <motion.h3 layoutId={"num-" + selectedProject.id} className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, background: selectedProject.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
                      {selectedProject.num}
                    </motion.h3>
                    <motion.h3 layoutId={"title-" + selectedProject.id} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>{selectedProject.title}</motion.h3>
                    <motion.h4 layoutId={"subtitle-" + selectedProject.id} className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginTop: '10px' }}>{selectedProject.subtitle}</motion.h4>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '12px 25px' }}>
                        <FaGithub size={20} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}
                  className="modal-content"
                >
                  <div>
                    <h5 className="mono" style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', opacity: 0.5 }}>Overview</h5>
                    <p style={{ color: '#d4d4d4', lineHeight: 1.8, fontSize: '1.2rem' }}>{selectedProject.desc}</p>
                  </div>
                  <div>
                    <h5 className="mono" style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1rem', opacity: 0.5 }}>Technologies</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="mono" style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', padding: '8px 18px', borderRadius: '30px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .project-card { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.3) !important; }
        .project-card:hover .proj-thumb { scale: 1.1; }
        .close-btn:hover { background: rgba(255,255,255,0.1) !important; transform: rotate(90deg); transition: all 0.3s; }
        @media (max-width: 768px) {
          .modal-content { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
