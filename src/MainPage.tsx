import { Navigate } from 'react-router-dom';
import Calender from './Calender';
import Filter from './Filter';
import Seats from './Seats';
import polygon from './assets/polygon.svg';

//import eclipse from './assets/Eclipse.svg'
import './MainPage.css';
import Dropdown from './Dropdown';

const LoginPage = () => {
  const isAuthorized = localStorage.getItem('accessToken');

  return (
    <div>
      {isAuthorized ? '' : <Navigate to="/user/join" replace={true} />}
      <div className="element">
        <header className="header">도서관 예약 시스템</header>

        <div className="calender">
          <Calender />
        </div>

        <div className="filter">
          <Filter />
        </div>

        <div className="seats">
          <Seats />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
