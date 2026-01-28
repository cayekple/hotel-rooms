import { HotelRoom } from "@/types";

export const hotelRooms: HotelRoom[] = [
  {
    id: "1",
    roomNumber: "101",
    floor: 1,
    items: [
      { id: "101-1", name: "King Bed", description: "Premium king-size bed" },
      { id: "101-2", name: "TV", description: "55-inch smart TV" },
      { id: "101-3", name: "Mini Fridge", description: "Compact refrigerator" },
      { id: "101-4", name: "Coffee Maker", description: "Keurig coffee machine" },
    ],
  },
  {
    id: "2",
    roomNumber: "102",
    floor: 1,
    items: [
      { id: "102-1", name: "Queen Bed", description: "Comfortable queen-size bed" },
      { id: "102-2", name: "TV", description: "43-inch smart TV" },
      { id: "102-3", name: "Desk", description: "Work desk with chair" },
    ],
  },
  {
    id: "3",
    roomNumber: "201",
    floor: 2,
    items: [
      { id: "201-1", name: "King Bed", description: "Premium king-size bed" },
      { id: "201-2", name: "TV", description: "65-inch smart TV" },
      { id: "201-3", name: "Mini Fridge", description: "Compact refrigerator" },
      { id: "201-4", name: "Sofa", description: "Leather sofa" },
      { id: "201-5", name: "Coffee Maker", description: "Nespresso machine" },
    ],
  },
  {
    id: "4",
    roomNumber: "202",
    floor: 2,
    items: [
      { id: "202-1", name: "Two Queen Beds", description: "Two queen-size beds" },
      { id: "202-2", name: "TV", description: "50-inch smart TV" },
      { id: "202-3", name: "Mini Fridge", description: "Compact refrigerator" },
    ],
  },
  {
    id: "5",
    roomNumber: "301",
    floor: 3,
    items: [
      { id: "301-1", name: "King Bed", description: "Luxury king-size bed" },
      { id: "301-2", name: "TV", description: "75-inch smart TV" },
      { id: "301-3", name: "Mini Bar", description: "Fully stocked mini bar" },
      { id: "301-4", name: "Coffee Maker", description: "Espresso machine" },
      { id: "301-5", name: "Jacuzzi", description: "In-room jacuzzi" },
      { id: "301-6", name: "Balcony Furniture", description: "Outdoor seating" },
    ],
  },
  {
    id: "6",
    roomNumber: "302",
    floor: 3,
    items: [
      { id: "302-1", name: "King Bed", description: "Premium king-size bed" },
      { id: "302-2", name: "TV", description: "55-inch smart TV" },
      { id: "302-3", name: "Mini Fridge", description: "Compact refrigerator" },
      { id: "302-4", name: "Desk", description: "Executive work desk" },
    ],
  },
];
