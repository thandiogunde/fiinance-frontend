import React from 'react';
import HeaderBar from './HeaderBar';
import Navbar from './Navbar';
import BannerSection from './BannerSection';
import LearningHub from './LearningHub';
import DailyTipsPreview from './DailyTipsPreview';

const HomePage = () => {
  return (
    <>
      <HeaderBar />
      <Navbar />
      <BannerSection />
      <LearningHub />
      <DailyTipsPreview />
    </>
  );
};

export default HomePage;
