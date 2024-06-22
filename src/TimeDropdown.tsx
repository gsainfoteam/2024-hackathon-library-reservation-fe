import { useState, useEffect, useRef } from 'react';
import polygon from './assets/polygon.svg';
import './TimeDropdown.css';

const TimeDropdown = ({
  onChange,
  end = false,
}: {
  end?: boolean;
  onChange: (time: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <img
        src={polygon}
        alt="이것은 전설의 버튼"
        className="roomDropdown"
        onClick={toggleDropdown}
      />
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {[...Array(16)].map((_, i) => (
          <button
            key={i}
            onClick={() => {
              onChange(i + 8);
              setIsOpen(false);
            }}
          >{`${(i + 8).toString().padStart(2, '0')}:${
            end ? 59 : '00'
          }`}</button>
        ))}
      </div>
    </div>
  );
};

export default TimeDropdown;
