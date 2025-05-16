import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import auditoriumImg from '../images/auditorium.png';
import conferenceImg from '../images/conference.jpg';
import purposeHallImg from '../images/purposehall.png';

const venues = [
  { name: 'Auditorium', capacity: 200, image: auditoriumImg },
  { name: 'Multi–Purpose Hall', capacity: 150, image: purposeHallImg },
  { name: 'Conference Room', capacity: 20, image: conferenceImg },
];

// 🔷 Blueprint-style sketch line (supports vertical lines)
const SketchLine = ({ top, left, width, height, text, rotate = 0, vertical = false, animate }) => (
  <motion.div
    className="absolute flicker"
    style={{
      top,
      left,
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

// 💡 Venue Card with hover interaction
const VenueCard = ({ venue, delay, index, hovered, setHovered }) => {
  const isHovered = hovered === index;
  const isOther = hovered !== null && hovered !== index;

  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        x: isOther ? (index < hovered ? -10 : 10) : 0,
      }}
      transition={{ delay, duration: 0.4, type: 'spring', bounce: 0.2 }}
      className="bg-[#1a1a1a] text-white rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform"
    >
      <div className="w-full min-h-[12rem] overflow-hidden">
        <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
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
};

// 🔧 Main Venue Section
const VenueSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const [hovered, setHovered] = useState(null);

  const lines = [
    { top: '20px', left: '10%', width: '180px', rotate: -2, text: `240"` },
    { top: '100px', left: '65%', width: '160px', rotate: 5, text: `CSA` },
    { top: '300px', left: '22%', width: '200px', rotate: -6, text: `12ft` },
    { top: '60px', left: '90%', height: '120px', vertical: true, text: `REV A` },
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {lines.map((line, i) => (
          <SketchLine key={i} {...line} animate={inView} />
        ))}
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <h3 className="text-5xl font-black mb-12 text-left glow-text">Reservation of Venues</h3>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <select className="flex-1 bg-[#1a1a1a] text-white border border-white/20 rounded px-4 py-2">
            <option>Date</option>
          </select>
          <select className="flex-1 bg-[#1a1a1a] text-white border border-white/20 rounded px-4 py-2">
            <option>Capacity</option>
          </select>
          <select className="flex-1 bg-[#1a1a1a] text-white border border-white/20 rounded px-4 py-2">
            <option>Type</option>
          </select>
        </div>

        {/* Venue Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue, index) => (
            <VenueCard
              key={venue.name}
              venue={venue}
              delay={index * 0.2}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
