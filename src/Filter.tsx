import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Filter.css';
import RoomDropdown from './RoomDropdown';
import TimeDropdown from './TimeDropdown';
import { RoomType, roomTypes } from './utils/room';

const Filter = ({
  setStartTime,
  setEndTime,
  startTime,
  endTime,
  roomType,
  setRoomType,
}: {
  startTime: number;
  endTime: number;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  roomType: RoomType;
  setRoomType: (roomType: RoomType) => void;
}) => {
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
