import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import polygon from "./assets/polygon.svg";
import RoomDropdown from "./RoomDropdown";
import TimeDropdown from "./TimeDropdown";
import "./Filter.css";
import dayjs from "dayjs";

const Filter = () => {
  return (
    <Container>
      <Row>
        <Col className="Filter">필터</Col>
      </Row>
      <Row>
        <Col className="col-auto Seats">좌석 종류</Col>
        <Col className="col-auto SeatName">2F 개인 열람실</Col>
        <Col className="col-auto RButton">
          <RoomDropdown />
        </Col>
      </Row>
      <Row>
        <Col className="col-auto Time">시간</Col>
        <Col className="col-auto TimeNum">09:00</Col>
        <Col className="col-auto Button">
          <TimeDropdown />
        </Col>
        <Col className="col-auto Hypoon">-</Col>
        <Col className="col-auto TimeNum">14:00</Col>
        <Col className="col-auto Button">
          <TimeDropdown />
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
