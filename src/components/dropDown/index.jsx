import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { svgs } from '../../assets/svgs';
import './Dropdown.css';

function DropDown({ options, defaultOption, width, icon }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  return (
    <div className="dropdown">
      <button style={{ width }} className="dropbtn center-between" type="button">
        <span>{selectedOption}</span>
        <span>{icon}</span>
      </button>
      <div style={{ width }} className="dropdownContent">
        {options &&
          options.map((opt, ind) => (
            <div
              className={`${selectedOption === opt ? 'currentSelected' : null} opt`}
              key={`opt-${opt}`}
              role="presentation"
              onClick={() => setSelectedOption(opt)}
            >
              {opt}
            </div>
          ))}
      </div>
    </div>
  );
}
export default DropDown;

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

DropDown.defaultProps = {
  icon: null,
};
