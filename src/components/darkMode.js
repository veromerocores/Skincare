import React from 'react';

const DarkModes = ({ theme, toggleTheme }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModes;
