import { Navigate } from 'react-router-dom';
import Calender from './Calender';
import Filter from './Filter';
import Seats from './Seats';

//import eclipse from './assets/Eclipse.svg'
import './MainPage.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { RoomType } from './utils/room';
import useUser from './hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { searchReservation } from './api/reservation';

const LoginPage = () => {
  const isAuthorized = localStorage.getItem('accessToken');
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs().startOf('day'));
  const [roomType, setRoomType] = useState<RoomType>('SmallCarrels');
  const [startTime, setStartTime] = useState<number>(9);
  const [endTime, setEndTime] = useState<number>(14);
  const { logout } = useUser();
  const { data } = useQuery({
    queryKey: ['search', date, startTime, endTime, roomType],
    queryFn: () =>
      searchReservation({
        roomType,
        reserveDate: date.format('YYYYMMDD'),
        reserveFrom: startTime,
        reserveTo: endTime,
      }),
  });

  return (
    <div>
      {isAuthorized ? '' : <Navigate to="/user/join" replace={true} />}
      <button onClick={logout}>logout</button>
      <div className="element">
        <header className="header">도서관 예약 시스템</header>

        <div className="calender">
          <Calender selectedDate={date} onChange={setDate} />
        </div>

        <div className="filter">
          <Filter
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            startTime={startTime}
            endTime={endTime}
            roomType={roomType}
            setRoomType={setRoomType}
          />
        </div>

        <div className="seats">
          <Seats
            reservedSeats={
              data
                ?.filter((room) => room.occupied)
                .map((room) => +room.roomId) ?? []
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
