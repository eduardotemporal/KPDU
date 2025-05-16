import React from 'react';
import { motion } from 'framer-motion';
import UserIcon from '../images/user_icon.png';
import DocIcon from '../images/document_icon.png';
import TaskIcon from '../images/task_icon.png';

const dataCards = [
  {
    label: 'CSA Users',
    value: '1,245',
    icon: UserIcon,
    tag: 'Metric',
  },
  {
    label: 'Pending Requests',
    value: '87',
    icon: TaskIcon,
    tag: 'Queue',
  },
  {
    label: 'Completed Reports',
    value: '342',
    icon: DocIcon,
    tag: 'Reports',
  },
  {
    label: 'New Registrations',
    value: '56',
    icon: UserIcon,
    tag: 'Signup',
  },
  {
    label: 'Barangays',
    value: '19',
    icon: TaskIcon,
    tag: 'Support',
  },
  {
    label: 'Staff',
    value: '720',
    icon: DocIcon,
    tag: 'Archive',
  },
];

const DataCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', bounce: 0.2 }}
    className="group flex items-start gap-5 p-5 border border-[#222222]/20 rounded-xl hover:shadow-lg transition duration-300"
  >
    {/* Icon Box with full border and hover pulse */}
    <div className="min-w-[80px] min-h-[80px] flex items-center justify-center border-2 border-dashed border-[#02AB60] rounded-md transition-transform group-hover:scale-105">
      <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
    </div>

    {/* Text */}
    <div className="relative w-full">
      <span className="text-[#02AB60] font-mono text-xs uppercase tracking-wider mb-1 block">
        [{item.tag}]
      </span>
      <h4 className="text-xl font-bold text-[#222222] mb-1">{item.label}</h4>
      <p className="text-3xl font-mono font-bold text-[#0A2C40] relative z-10">
        {item.value}
      </p>
      {/* Watermark */}
      <span className="absolute bottom-0 right-4 text-[#222222]/5 text-6xl font-mono font-bold select-none pointer-events-none leading-none">
        {item.value}
      </span>
    </div>
  </motion.div>
);

const OtherDataSection = () => {
  const leftCards = dataCards.slice(0, 3);
  const rightCards = dataCards.slice(3, 6);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <h3 className="text-4xl font-extrabold text-[#222222] text-center mb-16 tracking-tight font-mono">
        Other Data
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          {leftCards.map((item, index) => (
            <DataCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          {rightCards.map((item, index) => (
            <DataCard key={index + 3} item={item} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherDataSection;
