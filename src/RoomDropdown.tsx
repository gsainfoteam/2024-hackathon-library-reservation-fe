import { useState, useEffect, useRef } from 'react';
import polygon from './assets/polygon.svg';
import './RoomDropdown.css';
import { RoomType, roomTypes } from './Filter';

const RoomDropdown = ({
  onChange,
}: {
  onChange: (roomType: RoomType) => void;
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
        {Object.keys(roomTypes).map((type) => (
          <button
            key={type}
            onClick={() => {
              onChange(type as RoomType);
              setIsOpen(false);
            }}
          >
            {roomTypes[type as RoomType]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomDropdown;
