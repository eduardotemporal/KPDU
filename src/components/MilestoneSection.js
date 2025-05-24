import { motion } from 'framer-motion';

// Milestone Data
const milestones = [
  {
    date: 'January 2023',
    title: 'Launch of the Platform',
    description: 'We officially launched our platform to the public, marking the beginning of a new era.',
  },
  {
    date: 'March 2023',
    title: 'Partnership with XYZ Company',
    description: 'We partnered with XYZ to expand our global reach and offer more services.',
  },
  {
    date: 'June 2023',
    title: '100k Users Milestone',
    description: 'Reached 100,000 active users on the platform.',
  },
  {
    date: 'August 2023',
    title: 'New Feature Release',
    description: 'Launched a major update with new features, including dark mode and improved user interface.',
  },
  {
    date: 'December 2023',
    title: 'Annual Report Released',
    description: 'Published our first annual report, sharing growth, achievements, and future goals.',
  },
  {
    date: 'February 2024',
    title: 'Award for Excellence',
    description: 'Won the prestigious Award for Excellence in Tech Innovation.',
  },
  {
    date: 'May 2024',
    title: 'International Expansion',
    description: 'Launched our services in multiple new countries.',
  },
];

// Milestone Card Component
const MilestoneCard = ({ milestone, index, isFirst }) => {
  return (
    <motion.div
      className={`milestone-card flex flex-col items-center space-y-4 p-6 rounded-xl shadow-lg bg-[#222222] text-white max-w-md ${
        isFirst ? 'flex-shrink-0 w-[300px]' : 'w-[250px]'
      }`}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{milestone.icon}</div>
        <div className="font-semibold text-xl">{milestone.title}</div>
      </div>
      <div className="text-sm text-white/70">{milestone.date}</div>
      <p className="text-sm text-white/90">{milestone.description}</p>
    </motion.div>
  );
};

// Milestone Section (Scrollable Horizontal Timeline)
const MilestoneSection = () => {
  return (
    <section className="relative bg-[#02AB60] w-full py-20 overflow-hidden announcement-blueprint-bg">
      {/* Blueprint Style Sketch Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div
          className="absolute"
          style={{ top: '40px', left: '10%', width: '280px' }}
          animate={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-[2px] origin-left bg-white/30 border-t-2 border-dashed border-white/50 animate-glow" />
          <div className="text-white/70 text-sm mt-1 font-mono uppercase tracking-widest animate-glow">Milestones</div>
        </motion.div>

        {/* Connecting Line Between Milestones */}
        <div className="absolute top-24 left-[18%] w-[85%] h-[2px] bg-white/30 border-t-2 border-dashed border-white/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-5xl font-black text-white text-left mb-12 tracking-tight glow-text ml-8">Our Milestones</h2>

        {/* Swipe Info Message (Mobile Only) */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-center items-center md:hidden">
          <p className="text-white text-lg font-bold bg-[#222222] p-2 rounded-md shadow-lg">
            Swipe right to see more → 
          </p>
        </div>

        {/* Scrollable Timeline */}
        <div className="overflow-x-auto scroll-smooth py-4 scrollbar-custom">
          <div className="flex items-center space-x-12 w-max relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <MilestoneCard milestone={milestone} index={index} isFirst={index === 0} />
                {/* Dots representing each milestone */}
                <div className="absolute top-1/2 transform -translate-y-1/2 -left-3 w-6 h-6 bg-[#02AB60] rounded-full border-4 border-white"></div>
                {/* Connecting Line */}
                {index < milestones.length - 1 && (
                  <div
                    className="absolute left-full top-1/2 transform -translate-y-1/2 w-[60px] h-[2px] bg-white/30 border-t-2 border-dashed border-white/50"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;
