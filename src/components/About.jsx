import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaServer, FaDatabase, FaBrain } from 'react-icons/fa';

const SkillIcon = ({ icon: Icon, name, color }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass"
    style={{ 
      padding: '1.5rem', 
      borderRadius: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '1rem',
      cursor: 'default',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      background: color, 
      opacity: 0.05, 
      filter: 'blur(20px)',
      zIndex: 0
    }} />
    <Icon size={32} style={{ color: color, zIndex: 1 }} />
    <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', zIndex: 1 }}>{name}</span>
  </motion.div>
);

export default function About() {
  const skills = [
    { name: 'Python', icon: FaCode, color: '#3776ab' },
    { name: 'React.js', icon: FaCode, color: '#61dafb' },
    { name: 'Flask', icon: FaServer, color: '#ffffff' },
    { name: 'PostgreSQL', icon: FaDatabase, color: '#336791' },
    { name: 'SQL Spark', icon: FaDatabase, color: '#f59e0b' },
    { name: 'Scikit-Learn', icon: FaBrain, color: '#f7931e' },
  ];

  return (
    <section className="section" id="about" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'flex-start' }} className="about-grid">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>Who I Am.</h2>
            <div className="glass" style={{ padding: '3rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'var(--grad-hero)', opacity: 0.1, filter: 'blur(100px)' }}></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Hello! I'm <span style={{ color: '#fff', fontWeight: 600 }}>Dalavai Hemanth</span>, a student passionate about building things that live on the internet. My interest in software development started back in high school when I decided to try editing custom web templates — turns out hacking together a customized "Hello World" taught me a lot about HTML & CSS!
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Fast-forward to today, and I've worked on a diverse range of projects, from **Electricity Consumption Analysis** pipelines to **Live SQL Hackathon engines**. My focus these days is building accessible, inclusive products and digital experiences at the intersection of data science and web engineering.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="mono">
                  <FaGraduationCap style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ fontSize: '0.9rem', color: '#fff' }}>CSE (Data Science) @ RGMCET</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '1rem', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Expertise</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {skills.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass"
              style={{ padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--accent-purple)', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)' }}
            >
              <h3 style={{ color: '#fff', fontWeight: 800, marginBottom: '1rem', fontSize: '1.5rem' }}>Full Resume</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Deep dive into my technical journey, detailed project breakdowns, and academic achievements.</p>
              <a href="/kim/Dalavai_Hemanth_Resume.pdf" target="_blank" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                Download PDF Resume
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}
