import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Club Lead",
      org: "Yuga Spark Hackathon Club",
      desc: "Organized and managed college-level hackathons, fostering a culture of innovation and collaborative problem solving among students.",
      color: "#f43f5e"
    },
    {
      role: "Community Lead",
      org: "DataVerse",
      desc: "Founded and directed a data science community with over 50 active members, conducting workshops on Python, Machine Learning, and data analysis.",
      color: "#8b5cf6"
    }
  ];

  const achievements = [
    "Secured second place in college-level Data Drive Interview Preparation Contest.",
    "Achieved second place in college-level Poster Presentation, Department of CSE Data Science, RGMCET.",
    "Won third place in department-level Coding Contest.",
    "Awarded Special Prize at the 3-Level Mathematics Competition held by Nandyal Association of Mathematics Teachers."
  ];

  return (
    <section className="section" id="experience" style={{ zIndex: 10 }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, color: '#fff' }}
        >
          Leadership & Wins.
          <div style={{ flexGrow: 1, height: '2px', background: 'var(--grad-accent)', marginLeft: '2rem', opacity: 0.5 }} />
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass glass-card" 
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '150px', height: '150px', background: '#f43f5e', filter: 'blur(100px)', opacity: 0.15 }}></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '3rem', color: '#fff', fontWeight: 700 }}>Experience</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(255,255,255,0.05)' }}></div>
              
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  style={{ position: 'relative', paddingLeft: '2.5rem' }}
                  className="exp-item"
                >
                  <div style={{ position: 'absolute', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-color)', border: "3px solid " + exp.color, left: '0', top: '6px', zIndex: 2, boxShadow: "0 0 15px " + exp.color }}></div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{exp.role}</h4>
                  <p className="mono" style={{ color: exp.color, marginBottom: '1rem', fontSize: '0.95rem', fontWeight: 600 }}>{exp.org}</p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass glass-card" 
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '150px', height: '150px', background: '#3b82f6', filter: 'blur(100px)', opacity: 0.15 }}></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '3rem', color: '#fff', fontWeight: 700 }}>Achievements</h3>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none', padding: 0 }}>
              {achievements.map((achieve, idx) => (
                <li 
                  key={idx} 
                  style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem' }}>★</div>
                  <span style={{ color: '#e5e7eb', lineHeight: 1.6, fontSize: '1.05rem' }}>{achieve}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        
        </div>
      </div>
      <style>{`
        .exp-item { transition: transform 0.3s ease; }
        .exp-item:hover { transform: translateX(10px); }
      `}</style>
    </section>
  );
}
