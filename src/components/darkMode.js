import React from 'react';

const DarkModes = ({ theme, toggleTheme }) => {
    
  return (
    <label for="switch"  className="switch">
      <input type="checkbox" id="switch" value="switch" onfocus="if (this.value == 'switch') {this.value = '';}" onblur="if (this.value == '') {this.value = 'switch';}" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModes;
