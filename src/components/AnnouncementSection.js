import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TogetherImage from '../images/together.jpg';

// Sample announcement data
const announcements = [
  { title: 'Campus Cleanup Drive', description: 'Join us this Saturday for a community cleanup event.', type: 'Event', image: TogetherImage, works: 12, awards: 5, website: 'campusdrive.org' },
  { title: 'New Resource Center Hours', description: 'CSA Resource Center is now open 8am–6pm, Mon to Fri.', type: 'Notice', image: TogetherImage, works: 6, awards: 2, website: 'csaresource.org' },
  { title: 'Volunteer Briefing', description: 'Mandatory Zoom orientation for all new volunteers.', type: 'Urgent', image: TogetherImage, works: 3, awards: 1, website: 'volunteerhub.org' },
  { title: 'Charity Auction Night', description: 'Bid and support education at our charity auction night.', type: 'Event', image: TogetherImage, works: 10, awards: 3, website: 'charityauction.org' },
  { title: 'Green Week Launch', description: 'Celebrate sustainability with a week of green events.', type: 'Event', image: TogetherImage, works: 8, awards: 4, website: 'greenweek.org' },
];

const CARD_WIDTH = 500;

// ✨ Enhanced SketchLine with flicker & glow, scaled smaller
const SketchLine = ({ top, left, width, text, rotate = 0, animate }) => (
  <motion.div
    className="absolute flicker"
    style={{
      top,
      left,
      width: `calc(${width} * 0.8)`,  // slightly smaller lines
      transform: `scaleX(${animate ? 1 : 0}) rotate(${rotate}deg)`,
      transformOrigin: 'left center',
    }}
    initial={{ scaleX: 0 }}
    animate={animate ? { scaleX: 1 } : {}}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <div className="h-[2px] origin-left bg-white/30 border-t-2 border-dashed border-white/50 animate-glow" />
    {text && (
      <div className="text-white/70 text-sm mt-1 font-mono uppercase tracking-widest animate-glow">{text}</div>
    )}
  </motion.div>
);

// Card component with reduced height
const AnnouncementCard = ({ item }) => (
  <div className="flex-shrink-0 w-[500px] h-[560px] bg-[#222222] text-white rounded-2xl overflow-hidden shadow-2xl">
    <div className="w-full h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
    <div className="p-8 flex flex-col justify-between h-[360px]">
      <div>
        <span className="text-base text-green-400 mb-2 block">{item.type}</span>
        <h3 className="text-4xl font-extrabold leading-snug mb-4">{item.title}</h3>
        <p className="text-lg text-gray-300">{item.description}</p>
      </div>
      <div className="text-base text-gray-400 mt-auto">
        <div className="flex justify-between items-center mb-1">
          <span>{item.website}</span>
          <span className="px-3 py-1 bg-white text-black text-sm rounded-md">Works {item.works}</span>
        </div>
        <span>{item.awards} awards</span>
      </div>
    </div>
  </div>
);

// Main section with smaller vertical padding
const AnnouncementSection = () => {
  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = announcements.length - 3;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * (CARD_WIDTH + 24),
        behavior: 'smooth',
      });
    }
    setScrollIndex(index);
  };

  const handleNext = () => {
    if (scrollIndex < maxIndex) scrollToIndex(scrollIndex + 1);
  };

  const handlePrev = () => {
    if (scrollIndex > 0) scrollToIndex(scrollIndex - 1);
  };

  return (
   <section
  ref={sectionRef}
  className="relative bg-[#02AB60] w-full py-20 overflow-hidden announcement-blueprint-bg"
>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <SketchLine top="40px" left="10%" width="280px" text="Announcement Guide" animate={inView} />
        <SketchLine top="160px" left="65%" width="200px" animate={inView} />
        <SketchLine top="360px" left="30%" width="240px" text="CSA" rotate={-5} animate={inView} />
        <SketchLine top="540px" left="75%" width="200px" rotate={8} animate={inView} />
        <SketchLine top="92%" left="5%" width="320px" rotate={0} text="CSA" animate={inView} />
      </div>

      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-5xl font-black text-white text-left mb-12 tracking-tight glow-text ml-8">Announcements</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="text-white text-4xl px-4 py-3 rounded-full hover:bg-white/20 transition"
            >
              ‹
            </button>
            <div
              ref={carouselRef}
              className="w-full max-w-[1560px] mx-auto flex overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory space-x-6"
            >
              {announcements.map((item, index) => (
                <div key={index} className="snap-start">
                  <AnnouncementCard item={item} />
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-white text-4xl px-4 py-3 rounded-full hover:bg-white/20 transition"
            >
              ›
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: announcements.length - 2 }).map((_, i) => (
              <span
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  i === scrollIndex ? 'bg-white' : 'bg-white/30'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
