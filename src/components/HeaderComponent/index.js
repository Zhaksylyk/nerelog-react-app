import React from "react";

const HeaderComponent = ({ handleToggle = () => {} }) => {
  return (
    <header>
      <div className="image-text">
        <span className="image"></span>

        <div className="text logo-text">
          <span className="name">NERELOG</span>
          <span className="profession">React App</span>
        </div>
      </div>

      <i className="bx bx-chevron-right toggle" onClick={handleToggle}></i>
    </header>
  );
};

export default HeaderComponent;
