import React, { useState, useEffect } from 'react';
// import P from 'prop-types';
// import { useLocation } from 'react-router-dom';
// import tw, { css } from 'twin.macro';

export const Home = () => {
  const onclick = e => {
    e.stopPropagation();
  };

  useEffect(() => {
    console.log('hello');
  }, []);

  return <div onClick={onclick}>hello</div>;
};
