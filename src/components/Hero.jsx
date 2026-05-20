import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section" id="home">
      <div className="container" style={{ position: 'relative', zIndex: 30 }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '4rem', 
            width: '100%' 
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: '700px' }}>
              <motion.h2 variants={itemVariants} className="mono text-gradient-accent" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                Welcome to my universe
              </motion.h2>
              
              <motion.h1 variants={itemVariants} className="text-gradient" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-2px' }}>
                Dalavai Hemanth.
              </motion.h1>
              
              <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.2, letterSpacing: '-1px' }}>
                Engineering elegant <span style={{ color: '#fff' }}>data systems</span>.
              </motion.h3>
              
              <motion.p variants={itemVariants} style={{ fontSize: '1.15rem', color: '#c4c4c4', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.7 }}>
                Undergraduate Data Scientist at RGMCET. 
                I bridge the gap between complex machine learning architectures and beautifully designed, scalable web applications.
              </motion.p>
              
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-primary">
                  <span>Explore My Work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href="https://github.com/dalavaihemanth" target="_blank" rel="noreferrer" className="social-icon">
                    <FaGithub size={26} />
                  </a>
                  <a href="https://linkedin.com/in/dalavai-hemanth-86638931b" target="_blank" rel="noreferrer" className="social-icon">
                    <FaLinkedin size={26} />
                  </a>
                  <a href="mailto:dalavaihemanth2027@gmail.com" className="social-icon">
                    <FaEnvelope size={26} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants} 
              style={{ flexShrink: 0, position: 'relative' }}
            >
              <div 
                style={{
                  width: 'clamp(280px, 30vw, 380px)',
                  height: 'clamp(280px, 30vw, 380px)',
                  borderRadius: '50%',
                  position: 'relative',
                  padding: '8px',
                  background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
                  boxShadow: '0 20px 50px rgba(236, 72, 153, 0.3)'
                }}
              >
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--bg-color)' }}>
                  <img 
                    src="/kim/my image.jpeg" 
                    alt="Dalavai Hemanth" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .social-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #fff;
          transform: translateY(-3px);
          filter: drop-shadow(0 5px 15px rgba(255,255,255,0.3));
        }
      `}</style>
    </section>
  );
}
