import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import polygon from "./assets/polygon.svg";
import "./Calender.css";
import dayjs from "dayjs";

const Calender = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalender = () => {
    setIsOpen(!isOpen);
  };

  const startOfWeek = dayjs().startOf("week");
  const daysOfWeek = [...Array(28).keys()].map((offset) =>
    startOfWeek.add(offset, "day")
  );

  const calenderText = () => {
    if (isOpen) {
      return (
        <>
          <Row className="WeekNum">
            {daysOfWeek.slice(7, 14).map((day) => (
              <Col key={day.format("YYYY-MM-DD")} className="WeekNum-text">
                {day.format("DD")}
              </Col>
            ))}
          </Row>
          <Row className="WeekNum">
            {daysOfWeek.slice(14, 21).map((day) => (
              <Col key={day.format("YYYY-MM-DD")} className="WeekNum-text">
                {day.format("DD")}
              </Col>
            ))}
          </Row>
          <Row className="WeekNum">
            {daysOfWeek.slice(21, 28).map((day) => (
              <Col key={day.format("YYYY-MM-DD")} className="WeekNum-text">
                {day.format("DD")}
              </Col>
            ))}
          </Row>
        </>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col className="col-auto Month">2024년 6월</Col>
        <Col className="col-auto CButton">
          <img
            src={polygon}
            alt="이것은 전설의 버튼"
            className="CButton"
            onClick={toggleCalender}
          />
        </Col>
      </Row>
      <Row className="Week">
        <Col className="Week-text">일</Col>
        <Col className="Week-text">월</Col>
        <Col className="Week-text">화</Col>
        <Col className="Week-text">수</Col>
        <Col className="Week-text">목</Col>
        <Col className="Week-text">금</Col>
        <Col className="Week-text">토</Col>
      </Row>
      <Row className="WeekNum">
        {daysOfWeek.slice(0, 7).map((day) => (
          <Col key={day.format("YYYY-MM-DD")} className="WeekNum-text">
            {day.format("DD")}
          </Col>
        ))}
      </Row>
      {calenderText()}
    </Container>
  );
};

export default Calender;
