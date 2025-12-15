import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Financials from './components/Financials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import MobileStickyBar from './components/MobileStickyBar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-16 md:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Gallery />
        <Financials />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyBar />
      <ChatWidget />
    </div>
  );
}

export default App;