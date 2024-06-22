import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Filter.css';
import RoomDropdown from './RoomDropdown';
import TimeDropdown from './TimeDropdown';

export const roomTypes = {
  SmallCarrels: '2F 소형 개인 열람실',
  SmallGroupStudy: '2F 5인 회의실',
  MediumGroupStudy: '2F 8인 회의실',
  LargeGroupStudy: '3F 10인 회의실',
  MultiMedia: '4F 멀티미디어실',
};
export type RoomType = keyof typeof roomTypes;

const Filter = () => {
  const [roomType, setRoomType] = useState<RoomType>('SmallCarrels');
  const [startTime, setStartTime] = useState<number>(9);
  const [endTime, setEndTime] = useState<number>(14);

  return (
    <Container>
      <Row>
        <Col className="Filter">필터</Col>
      </Row>
      <Row>
        <Col className="col-auto Seats">좌석 종류</Col>
        <Col className="col-auto SeatName">{roomTypes[roomType]}</Col>
        <Col className="col-auto RButton">
          <RoomDropdown onChange={setRoomType} />
        </Col>
      </Row>
      <Row>
        <Col className="col-auto Time">시간</Col>
        <Col className="col-auto TimeNum">
          {startTime.toString().padStart(2, '0')}:00
        </Col>
        <Col className="col-auto Button">
          <TimeDropdown onChange={setStartTime} />
        </Col>
        <Col className="col-auto Hypoon">-</Col>
        <Col className="col-auto TimeNum">
          {endTime.toString().padStart(2, '0')}:59
        </Col>
        <Col className="col-auto Button">
          <TimeDropdown end onChange={setEndTime} />
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
