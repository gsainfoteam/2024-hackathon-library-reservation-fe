import { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import "./SecondFloor.css";

interface ModalProps {
  seatNumber: number;
  closeModal: () => void;
}

const SecondFloor: React.FC = () => {
  const reservedSeats: number[] = [240];
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const isReserved = (seatNumber: number): boolean => {
    return reservedSeats.includes(seatNumber);
  };

  const handleSeatClick = (seatNumber: number) => {
    setSelectedSeat(seatNumber);
  };

  const closeModal = () => {
    setSelectedSeat(null);
  };

  const Modal: React.FC<ModalProps> = ({ seatNumber, closeModal }) => (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="reserve">예약하기</div>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>Seat Number: {seatNumber}</p>
        <p>Status: {isReserved(seatNumber) ? "Reserved" : "Available"}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="Ghost"></div>
      <Col className="col-auto Left">
        {[228, 229, 230, 231, 232, 233, 234, 235, 236].map((seatNumber) => (
          <div
            className="col-auto leftSeat"
            key={seatNumber}
            style={{
              backgroundColor: isReserved(seatNumber) ? "#FF0000" : "#70FF00",
              border: "1px solid black",
            }}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        ))}
      </Col>
      <Col className="col-auto Middle">
        <Row>
          {[240, 239, 238, 237].map((seatNumber) => (
            <Col
              className="col-auto middleSeat"
              key={seatNumber}
              style={{
                backgroundColor: isReserved(seatNumber) ? "#FF0000" : "#70FF00",
                border: "1px solid black",
              }}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="col-auto Labtop">노트북 열람실</Col>
        </Row>
      </Col>
      <Col className="col-auto Right">
        {[227, 226, 225, 224, 223, 222, 221, 220, 219].map((seatNumber) => (
          <div
            className="col-auto rightSeat"
            key={seatNumber}
            style={{
              backgroundColor: isReserved(seatNumber) ? "#FF0000" : "#70FF00",
              border: "1px solid black",
            }}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        ))}
      </Col>
      {selectedSeat !== null && (
        <Modal seatNumber={selectedSeat} closeModal={closeModal} />
      )}
    </>
  );
};

export default SecondFloor;
