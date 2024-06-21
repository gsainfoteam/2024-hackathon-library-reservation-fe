import { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import "./SecondFloor.css";

const SecondFloor = () => {
  const reservedSeats = [240];

  const isReserved = (seatNumber: any) => {
    return reservedSeats.includes(seatNumber);
  };

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
          >
            {seatNumber}
          </div>
        ))}
      </Col>
    </>
  );
};

export default SecondFloor;
