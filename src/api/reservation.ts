import api from '.';

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
