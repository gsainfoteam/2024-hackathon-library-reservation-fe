import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import polygon from './assets/polygon.svg';
import './Calender.css';
import dayjs from 'dayjs';

const Calender = ({
  selectedDate,
  onChange,
}: {
  selectedDate: dayjs.Dayjs;
  onChange: (date: dayjs.Dayjs) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalender = () => {
    setIsOpen(!isOpen);
  };

  const startOfWeek = dayjs().startOf('week');
  const daysOfWeek = [...Array(28).keys()].map((offset) =>
    startOfWeek.add(offset, 'day'),
  );

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
      {[...Array(isOpen ? 4 : 1)].map((_, i) => (
        <Row className="WeekNum">
          {daysOfWeek.slice(i * 7, i * 7 + 7).map((day) => (
            <Col
              key={day.format('YYYY-MM-DD')}
              className={`WeekNum-text ${
                day.isSame(selectedDate, 'day') ? 'selected' : ''
              }`}
              onClick={() => onChange(day)}
            >
              {day.format('DD')}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Calender;
