import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import auditoriumImg from '../images/auditorium.png';
import purposeHallImg from '../images/purposehall.png';

const venues = [
  { name: 'Auditorium', capacity: 200, image: auditoriumImg },
  { name: 'Multi–Purpose Hall', capacity: 150, image: purposeHallImg },
];

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
      className={`origin-left bg-white/10 border-white/20 border-dashed ${
        vertical ? 'w-full h-full border-l-2' : 'w-full h-full border-t-2'
      }`}
    />
    {text && (
      <div className="text-white/50 text-xs mt-1 font-mono uppercase tracking-widest">
        {text}
      </div>
    )}
  </motion.div>
);
    
const VenueCard = ({ venue }) => (
  <motion.div
    key={venue.name} // Unique key for each card to ensure proper re-render
    initial={{ opacity: 0, y: 30 }}  // Initially, the card is invisible and slightly moved down
    animate={{ opacity: 1, y: 0 }}   // On animation, it becomes fully visible and slides up to position 0
    exit={{ opacity: 0, y: -30 }}    // Exit animation: fade out and slide up slightly
    transition={{ duration: 0.5 }}    // Smooth transition for both opacity and vertical movement
    className="bg-[#1a1a1a] text-white rounded-2xl overflow-hidden shadow-lg border border-white/10 w-full max-w-md mx-auto"
  >
    <div className="w-full h-48 overflow-hidden">
      <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold">{venue.name}</h4>
      <p className="text-sm text-white/70">Capacity: {venue.capacity}</p>
      <button className="mt-4 px-4 py-2 bg-[#02AB60] hover:bg-[#029c55] text-white text-sm rounded">
        Reserve Now
      </button>
    </div>
  </motion.div>
);


const VenueSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const [current, setCurrent] = useState(0);
  const total = venues.length;
  const prev = () => setCurrent(c => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent(c => (c === total - 1 ? 0 : c + 1));

  const lines = [
    { top: '20px', left: '10%', width: '180px', rotate: -2, text: `240"` },
    { top: '300px', left: '22%', width: '200px', rotate: -6, text: `12ft` },
    { top: '70%', left: '5%', width: '150px', rotate: 2, text: `190"` },
    { top: '88%', left: '75%', height: '100px', vertical: true },
    { top: '92%', left: '30%', width: '240px', rotate: -3, text: `Scale 1:50` },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 bg-[#222222] text-white blueprint-bg overflow-hidden"
    >
      {/* Sketch Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {lines.map((line, i) => (
          <SketchLine key={i} {...line} animate={inView} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto text-center">
        <h3 className="text-5xl font-black mb-6 glow-text">Reservation of Venues</h3>

        {/* Controls */}
        <div className="flex items-center justify-center mb-8 space-x-6">
          <button onClick={prev} className="text-white text-4xl font-bold px-4">‹</button>
          <div className="text-white/70 font-mono uppercase">
            {current + 1} / {total}
          </div>
          <button onClick={next} className="text-white text-4xl font-bold px-4">›</button>
        </div>

        {/* Single Card */}
        <VenueCard venue={venues[current]} />
      </div>
    </section>
  );
};

export default VenueSection;
