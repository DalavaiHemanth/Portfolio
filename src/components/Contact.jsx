import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div id="contact" style={{ textAlign: 'center', width: '100%', zIndex: 10, minHeight: '100vh', padding: '100px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '1rem', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase' }}>Get In Touch</h2>
          <h1 className="text-gradient" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, marginBottom: '4rem', letterSpacing: '-2px' }}>Let's Build Something.</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass"
          style={{ padding: '3rem', borderRadius: '32px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <form action="https://formspree.io/f/mqakvjnd" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="form-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.6 }}>Your Name</label>
                <input type="text" name="name" required placeholder="Hemanth Dalavai" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 20px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} className="form-input" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.6 }}>Email Address</label>
                <input type="email" name="email" required placeholder="hemanth@example.com" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 20px', color: '#fff', outline: 'none', transition: 'border-color 0.3s' }} className="form-input" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.6 }}>Message</label>
              <textarea name="message" required rows="5" placeholder="Let's talk about Data Science, AI, or Web Development!" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 20px', color: '#fff', outline: 'none', resize: 'none', transition: 'border-color 0.3s' }} className="form-input" />
            </div>
            
            <button type="submit" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              <span>Send Message</span>
              <FaPaperPlane size={16} />
            </button>
          </form>
        </motion.div>

        <div style={{ marginTop: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { icon: FaGithub, link: 'https://github.com/dalavaihemanth' },
              { icon: FaLinkedin, link: 'https://linkedin.com/in/hemanthdalavai' },
              { icon: FaEnvelope, link: 'mailto:dalavaihemanth2027@gmail.com' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.link} 
                target="_blank"
                whileHover={{ y: -5, color: 'var(--accent-cyan)' }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.8rem', transition: 'color 0.3s ease' }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
          <p className="mono" style={{ opacity: 0.4, fontSize: '0.8rem' }}>&copy; 2026 Designed & Developed by Dalavai Hemanth</p>
        </div>

      </div>
      
      <style>{`
        .form-input:focus { border-color: var(--accent-cyan) !important; background: rgba(255,255,255,0.05) !important; }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
