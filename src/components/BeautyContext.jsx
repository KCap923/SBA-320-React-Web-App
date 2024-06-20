import React, { createContext, useState, useEffect } from 'react';

export const BeautyContext = createContext();

const BeautyProvider = ({ children }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSparkles(data));
  }, []);

  return (
    <BeautyContext.Provider value={sparkles}>
      {children}
    </BeautyContext.Provider>
  );
};

export default BeautyProvider;
