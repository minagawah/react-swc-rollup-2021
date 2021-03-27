// import React, { useState, useEffect, lazy, Suspense } from 'react';
import React, { useState } from 'react';
// import tw, { css } from 'twin.macro';

export const About = () => {
  const [ok, setOk] = useState(false);

  const onclick = e => {
    e.stopPropagation();
    setOk(true);
  };

  return <div onClick={onclick}>About: {ok}</div>;
};
