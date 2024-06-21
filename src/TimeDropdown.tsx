import { useState, useEffect, useRef } from "react";
import polygon from "./assets/polygon.svg";
import "./TimeDropdown.css";

const TimeDropdown = () => {
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
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
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
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <a href="#">08:00</a>
        <a href="#">09:00</a>
        <a href="#">10:00</a>
        <a href="#">11:00</a>
        <a href="#">12:00</a>
        <a href="#">13:00</a>
        <a href="#">14:00</a>
        <a href="#">15:00</a>
        <a href="#">16:00</a>
        <a href="#">17:00</a>
        <a href="#">18:00</a>
        <a href="#">19:00</a>
        <a href="#">20:00</a>
        <a href="#">21:00</a>
        <a href="#">22:00</a>
        <a href="#">23:00</a>
        <a href="#">24:00</a>
      </div>
    </div>
  );
};

export default TimeDropdown;
