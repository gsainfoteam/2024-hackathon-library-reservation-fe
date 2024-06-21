import { useState, useEffect, useRef } from "react";
import polygon from "./assets/polygon.svg";
import "./RoomDropdown.css";

const RoomDropdown = () => {
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
        <a href="#">작은 극장</a>
        <a href="#">전시장</a>
        <a href="#">5인 회의실</a>
        <a href="#">8인 회의실</a>
        <a href="#">10인 회의실</a>
        <a href="#">혼자 공부</a>
        <a href="#">조금 큰 혼자 공부</a>
        <a href="#">강의실</a>
        <a href="#">멀미실</a>
      </div>
    </div>
  );
};

export default RoomDropdown;
