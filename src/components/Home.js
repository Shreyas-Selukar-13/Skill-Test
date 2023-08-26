import React from 'react';
import CustomHabits from './Habits';
import CustomNavbar from './Navbar';

const CustomHome = () => {
  return (
    <>
      <CustomNavbar title="Custom Detail View" />
      <CustomHabits />
    </>
  );
};

export default CustomHome;
