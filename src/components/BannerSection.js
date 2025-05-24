import React, { useRef, useState, useEffect } from 'react';

// Import images
import Benilde1 from '../images/benilde1.jpg';
import Benilde2 from '../images/benilde2.jpg';
import Benilde3 from '../images/benilde3.jpg';
import Benilde4 from '../images/benilde4.jpg';
import Benilde5 from '../images/benilde5.jpg';
import Benilde7 from '../images/benilde7.jpg';

// List of images
const slides = [
  { image: Benilde1 },
  { image: Benilde2 },
  { image: Benilde3 },
  { image: Benilde4 },
  { image: Benilde5 },
  { image: Benilde7 },
];

const CARD_WIDTH = 500; // Adjusted card width
const ITEMS_VISIBLE = 3; // Show 3 images at a time

const BannerSection = () => {
  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = slides.length - ITEMS_VISIBLE;
  
  // Auto-scroll the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [scrollIndex]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * (CARD_WIDTH + 24), // Adjust scroll position
        behavior: 'smooth',
      });
    }
    setScrollIndex(index);
  };

  const handleNext = () => {
    if (scrollIndex < maxIndex) {
      scrollToIndex(scrollIndex + 1);
    } else {
      setScrollIndex(0); // Reset to the first slide if we're at the end
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      scrollToIndex(scrollIndex - 1);
    } else {
      setScrollIndex(maxIndex); // Go to the last slide if we're at the beginning
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-4 md:px-6 relative z-10">
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
              {slides.map((slide, index) => (
                <div key={index} className="snap-start">
                  <div className="flex-shrink-0 w-[500px] h-[300px] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={slide.image}
                      alt="Banner"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
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

          {/* Pagination (Optional) */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: slides.length - 2 }).map((_, i) => (
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

export default BannerSection;
