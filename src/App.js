import React from 'react';
import './App.css';
import Header from './components/Header';
import Panel from './components/Panel';
import BannerSection from './components/BannerSection';
import VenueSection from './components/VenueSection';
import ActivitySection from './components/ActivitySection';
import AnnouncementSection from './components/AnnouncementSection';
import OtherDataSection from './components/OtherDataSection';
import ScholarshipsSection from './components/ScholarshipsSection';
import MilestoneSection from './components/MilestoneSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-[#0A2C40] font-sans">
      <Header />
      <main className="px-6 md:px-12 lg:px-24 py-12">


        <div className="relative w-full h-[60vh] md:h-[400px] mb-12">
          <BannerSection />
        </div>

        {/* Announcement Section */}
        <AnnouncementSection />
        
        {/* Activity Section */}
        <ActivitySection />
        
        {/* Blueprint-style divider */}
        <section className="px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-2">
            CSA — Community Service Action
          </h2>
          <p className="text-[#222222] text-lg md:text-xl mb-6 w-full md:w-1/2">
            A Benilde-based community offers venue and scholarship to people who are in need . HOTDOG!.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-4 items-stretch">
            {/* Venue Box */}
            <div className="bg-[#222222] border border-white/10 overflow-hidden flex rounded-2xl flex-col h-full">
              <VenueSection />
            </div>

            {/* Scholarships Box */}
            <div className="bg-[#222222] border border-white/10 overflow-hidden rounded-2xl flex flex-col h-full">
              <ScholarshipsSection />
            </div>
          </div>
        </section>

        {/* Milestone Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="mx-4 md:mx-6 lg:mx-12 my-8 border-t-2 border border-black" />
          <MilestoneSection />
          <div className="mx-4 md:mx-6 lg:mx-12 my-8 border-t-2 border border-black" />
        </section>

        {/* Other Data Section */}
        <OtherDataSection />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
