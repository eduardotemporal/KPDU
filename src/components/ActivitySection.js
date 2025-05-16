import React from 'react';
import { motion } from 'framer-motion';
import danceImg from '../images/dance.jpg';
import togetherImg from '../images/together.jpg';
import partyImg from '../images/party.jpg';

const activities = [
  {
    title: 'Dance Workshop',
    description: 'Join our community dance session to learn fun and energetic routines led by expert instructors.',
    image: danceImg,
    tag: 'Interactive',
  },
  {
    title: 'Together for Change',
    description: 'Engage in collaborative activities that bring people together to discuss and drive social change.',
    image: togetherImg,
    tag: 'Dialogue',
  },
  {
    title: 'Cultural Night',
    description: 'Celebrate the richness of our culture with performances, music, and delicious food.',
    image: partyImg,
    tag: 'Evening',
  },
];

// Different dashed border combos for sketchy look
const borderStyles = [
  'border-t-2 border-l-2',
  'border-b-2 border-r-2',
  'border-l-2 border-b-2',
  'border-t-2 border-r-2',
  'border-t-2',
  'border-b-2',
  'border-l-2',
  'border-r-2',
];

const ActivityRow = ({ activity, reverse, delay, borderClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, type: 'spring', bounce: 0.2 }}
    className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-stretch mb-20 gap-10`}
  >
    {/* ✏️ Broken dashed border wrapper */}
    <div
      className={`md:w-1/2 h-[420px] overflow-hidden rounded-none p-1 border-[#02AB60] border-dashed ${borderClass}`}
    >
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text block */}
    <div className="md:w-1/2 flex flex-col justify-center text-left">
      <span className="text-[#02AB60] font-mono uppercase text-xs tracking-wider mb-2">
        [{activity.tag}]
      </span>
      <h4 className="text-3xl font-bold text-[#222222] mb-3 tracking-tight">
        {activity.title}
      </h4>
      <p className="text-[#222222] text-base leading-relaxed mb-6">
        {activity.description}
      </p>
      <button className="w-fit px-6 py-2 border-2 border-[#02AB60] text-[#02AB60] font-medium text-sm uppercase tracking-wide hover:bg-[#02AB60] hover:text-white transition">
        Sign Up
      </button>
    </div>
  </motion.div>
);

const ActivitySection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white">
      <h3 className="text-5xl font-extrabold text-[#222222] text-center mb-20 tracking-tight">
        Activity Sign-ups
      </h3>

      {activities.map((activity, index) => (
        <ActivityRow
          key={activity.title}
          activity={activity}
          reverse={index % 2 === 1}
          delay={index * 0.2}
          borderClass={borderStyles[index % borderStyles.length]} // Rotate through borders
        />
      ))}
    </section>
  );
};

export default ActivitySection;
