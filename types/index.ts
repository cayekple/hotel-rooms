export interface RoomItem {
  id: string;
  name: string;
  description?: string;
}

export interface HotelRoom {
  id: string;
  roomNumber: string;
  floor: number;
  items: RoomItem[];
}
