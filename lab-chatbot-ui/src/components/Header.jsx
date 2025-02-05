import React from "react";

const Header = ({ title }) => {
  return (
    <div className="p-4 bg-blue-600 text-white text-lg font-semibold">
      {title}
    </div>
  );
};

export default Header;
