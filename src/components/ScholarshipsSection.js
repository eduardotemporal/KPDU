import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import scholar1 from '../images/scholar1.jpg';
import scholar2 from '../images/scholar2.jpg';
import scholar3 from '../images/scholar3.jpg';

const scholarships = [
  { name: 'Academic Excellence', criteria: 'Top 5%', image: scholar1 },
  { name: 'Financial Aid Program', criteria: 'Based on Need', image: scholar2 },
  { name: 'Leadership Grant', criteria: 'Student Leaders', image: scholar3 },
];

// Your existing SketchLine component
const SketchLine = ({ top, left, width, height, text, rotate = 0, vertical = false, animate }) => (
  <motion.div
    className="absolute flicker"
    style={{
      top, left,
      width: vertical ? '2px' : width,
      height: vertical ? height : '2px',
      transform: `rotate(${rotate}deg)`,
    }}
    initial={{ scaleY: vertical ? 0 : 1, scaleX: vertical ? 1 : 0 }}
    animate={animate ? { scaleY: 1, scaleX: 1 } : {}}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <div
      className={`origin-left bg-white/30 border-white/40 border-dashed animate-glow ${
        vertical ? 'w-full h-full border-l-2' : 'w-full h-full border-t-2'
      }`}
    />
    {text && (
      <div className="text-white/50 text-xs mt-1 font-mono uppercase tracking-widest animate-glow">
        {text}
      </div>
    )}
  </motion.div>
);

const ScholarshipCard = ({ item }) => (
  <motion.div
    key={item.name}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1a1a1a] text-white rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform w-full max-w-md mx-auto"
  >
    <div className="w-full min-h-[12rem] overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold">{item.name}</h4>
      <p className="text-sm text-white/70">Criteria: {item.criteria}</p>
      <button className="mt-4 px-4 py-2 bg-[#02AB60] hover:bg-[#029c55] text-white text-sm rounded">
        Apply Now
      </button>
    </div>
  </motion.div>
);

const ScholarshipsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const [current, setCurrent] = useState(0);
  const total = scholarships.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const lines = [
    { top: '30px', left: '15%', width: '160px', rotate: -3, text: `MERIT` },



    { top: '75%', left: '8%', width: '150px', rotate: 3, text: `2025` },
    { top: '90%', left: '70%', height: '80px', vertical: true },
    { top: '93%', left: '28%', width: '200px', rotate: -2, text: `Scale 1:50` },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 bg-[#222222] text-white blueprint-bg overflow-hidden"
    >
      {/* Sketch Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {lines.map((line, i) => (
          <SketchLine key={i} {...line} animate={inView} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <h3 className="text-center text-5xl font-black mb-6 text-left glow-text">
          Scholarship Programs
        </h3>

     {/* Counter + Arrows */}
<div className="flex items-center justify-between mb-8 max-w-md mx-auto">
  <button
    onClick={prev}
    className="text-white text-4xl font-bold px-4"
    aria-label="Previous scholarship"
  >
    ‹
  </button>
  <div className="text-white/70 font-mono uppercase">
    {current + 1} / {total}
  </div>
  <button
    onClick={next}
    className="text-white text-4xl font-bold px-4"
    aria-label="Next scholarship"
  >
    ›
  </button>
</div>


        {/* Single Card Carousel */}
        <ScholarshipCard item={scholarships[current]} />
      </div>
    </section>
  );
};

export default ScholarshipsSection;
