import React from 'react';
import CustomHabits from './Habits';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar title="Custom Detail View" />
      <CustomHabits />
    </>
  );
};

export default Home;
