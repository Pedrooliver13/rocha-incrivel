import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

const Base: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Base;
