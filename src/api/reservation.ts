import api from '.';
import { RoomType } from '../utils/room';

export interface MyInfo {
  userId: string;
  userName: string;
  koreanName: string;
  departmentName: string;
  availableInDay: number;
  availableInMonth: number;
}

export const getMe = () =>
  api.get<MyInfo>('library/me').then((res) => res.data);

export const searchReservation = ({
  roomType,
  reserveDate,
  reserveFrom,
  reserveTo,
}: {
  roomType: RoomType;
  reserveDate: string;
  reserveFrom: number;
  reserveTo: number;
}) =>
  api
    .get<
      {
        roomId: string;
        occupied: boolean;
        reservedTimes: number[];
        myTimes: number[];
      }[]
    >('/library/search', {
      params: {
        roomGroup: roomType,
        reserveDate: [reserveDate],
        reserveFrom,
        reserveTo,
      },
    })
    .then((res) => res.data);
