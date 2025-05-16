import React from 'react';
import './App.css';
import Header from './components/Header';
import Panel from './components/Panel';
import VenueSection from './components/VenueSection';
import ActivitySection from './components/ActivitySection';
import AnnouncementSection from './components/AnnouncementSection';
import OtherDataSection from './components/OtherDataSection';
import Footer from './components/Footer';





import {
  HiOutlineClipboardList,
  HiOutlineSpeakerphone,
  HiOutlineDatabase,
} from 'react-icons/hi';

function App() {
  return (
    <div className="bg-white min-h-screen text-[#0A2C40] font-sans">
      <Header />
      <main className="px-6 md:px-12 lg:px-24 py-12">

        
        <VenueSection />

        <ActivitySection />

        <AnnouncementSection />

        <OtherDataSection />


      </main>
         <Footer />
    </div>
  );
}

export default App;
