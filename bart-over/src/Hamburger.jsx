import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({ isOpen, toggleMenu }) => {
    return (
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes}/> // Correct usage of FontAwesomeIcon
        ) : (
          <FontAwesomeIcon icon={faBars}/> // Correct usage of FontAwesomeIcon
        )}
      </div>
    );
};

export default Hamburger;