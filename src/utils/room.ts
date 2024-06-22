export const roomTypes = {
  SmallCarrels: '2F 소형 개인 열람실',
  SmallGroupStudy: '2F 5인 회의실',
  MediumGroupStudy: '2F 8인 회의실',
  LargeGroupStudy: '3F 10인 회의실',
  MultiMedia: '4F 멀티미디어실',
};
export type RoomType = keyof typeof roomTypes;
