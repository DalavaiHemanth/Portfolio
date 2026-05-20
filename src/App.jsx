import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useProgress } from '@react-three/drei';

function Loader({ onComplete }) {
  const { progress, active } = useProgress();
  const [message, setMessage] = useState("VIRTUAL_CORE_SYNCING");

  useEffect(() => {
    const messages = ["BOOTING_NEURAL_LINK", "CALIBRATING_SENSORS", "FETCHING_ASSETS", "INTERFACE_READY"];
    const interval = setInterval(() => {
      setMessage(prev => {
        const idx = messages.indexOf(prev);
        return messages[(idx + 1) % messages.length];
      });
    }, 600); // 2x faster status updates
    // Aggressive safety fallback
    const timeout = setTimeout(() => onComplete(), 3000); 
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [onComplete]);

  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => onComplete(), 200); // Near instant transition
      return () => clearTimeout(timer);
    }
  }, [active, progress, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)', transition: { duration: 1, ease: 'circIn' } }}
      style={{ 
        position: 'fixed', inset: 0, zIndex: 9999, 
        display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        alignItems: 'center', backgroundColor: '#050505', color: '#fff',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>

      <div style={{ position: 'relative', marginBottom: '4rem', textAlign: 'center' }}>
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ fontSize: '6rem', fontWeight: 900, letterSpacing: '-6px' }}
        >
          D<span style={{ color: 'var(--accent-cyan)' }}>.</span>H<span style={{ color: 'var(--accent-purple)' }}>.</span>
        </motion.div>
        <motion.div 
          animate={{ width: ['0%', '80%', '0%'], left: ['10%', '10%', '10%'], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ position: 'absolute', height: '1px', background: '#fff', bottom: '15px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
        <div style={{ position: 'relative', width: '280px', height: '1px', background: 'rgba(255,255,255,0.1)' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: 'var(--grad-accent)', boxShadow: '0 0 15px #3b82f6' }}
          />
          <motion.div 
            animate={{ left: ['-20%', '120%'] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            style={{ position: 'absolute', top: '-1px', width: '60px', height: '3px', background: '#fff', boxShadow: '0 0 10px #fff', opacity: 0.6 }}
          />
        </div>
        
        <div className="mono" style={{ fontSize: '0.7rem', letterSpacing: '5px', opacity: 0.4, fontWeight: 700 }}>
          {message}
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [cursorMode, setCursorMode] = useState('default');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) setScrolled(true);
    else setScrolled(false);
    
    if (latest > previous && latest > 200) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  });

  useEffect(() => {
    let audioCtx = null;
    const playTick = (freq, type, duration, vol) => {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) { /* audio fallback */ }
    };

    const handleHover = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
        playTick(800, 'sine', 0.05, 0.02); 
        setCursorMode('hover');
      } else {
        setCursorMode('default');
      }
    };
    const handleClick = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
        playTick(150, 'triangle', 0.1, 0.05); 
      }
    };

    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor mode={cursorMode} />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Scene3D />
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ delay: loading ? 0 : 0.5, duration: 0.4 }}
        className={scrolled ? 'glass-nav' : ''}
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, padding: scrolled ? '15px 40px' : '25px 40px', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          zIndex: 100, transition: 'padding 0.3s ease'
        }}
      >
        <a href="#home" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>
          D<span style={{ color: 'var(--accent-cyan)' }}>.</span>H<span style={{ color: 'var(--accent-purple)' }}>.</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {['About', 'Projects', 'Experience'].map((item, i) => (
            <a key={item} href={"#" + item.toLowerCase()} className="nav-link mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>0{i + 1}.</span> {item}
            </a>
          ))}
          <a href="#contact" className="nav-link mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>04.</span> Contact
          </a>
          <a href="/kim/Dalavai_Hemanth_Resume.pdf" target="_blank" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Resume
          </a>
        </div>
      </motion.nav>

      <main style={{ position: 'relative', zIndex: 10, flexGrow: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <style>{`
        .nav-link { transition: color 0.3s ease; }
        .nav-link:hover { color: var(--accent-cyan) !important; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          nav { padding: 15px 20px !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
