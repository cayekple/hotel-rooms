import Link from "next/link";
import { hotelRooms } from "@/data/rooms";

export default function Home() {
  const roomsByFloor = hotelRooms.reduce((acc, room) => {
    if (!acc[room.floor]) {
      acc[room.floor] = [];
    }
    acc[room.floor].push(room);
    return acc;
  }, {} as Record<number, typeof hotelRooms>);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-50">
          Hotel Rooms
        </h1>

        {Object.entries(roomsByFloor)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([floor, rooms]) => (
            <div key={floor} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
                Floor {floor}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                  <Link
                    key={room.id}
                    href={`/room/${room.id}`}
                    className="block"
                  >
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-zinc-200 dark:border-zinc-700">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                          Room {room.roomNumber}
                        </h3>
                        <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                          Floor {room.floor}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {room.items.length} {room.items.length === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
