import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import red from "./assets/red.svg";
import green from "./assets/green.svg";
import "./Seats.css";
import SecondFloor from "./SecondFloor";

const Seats = () => {
  return (
    <Container>
      <Row>
        <Col className="col-auto SeatTitle">좌석 선택</Col>
        <Col>
          <Row>
            <Col className="col-auto R">
              <img className="img" alt="Red" src={red} />
            </Col>
            <Col className="col-auto SeatColorR">사용중</Col>
          </Row>
          <Row>
            <Col className="col-auto">
              <img className="img" alt="Green" src={green} />
            </Col>
            <Col className="col-auto SeatColorG">예약 가능</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <SecondFloor />
      </Row>
    </Container>
  );
};

export default Seats;
