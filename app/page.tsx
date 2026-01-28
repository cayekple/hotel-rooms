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
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Hotel Rooms
              </h1>
              <p className="mt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Browse rooms by floor
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {hotelRooms.length} Total Rooms
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12">
          {Object.entries(roomsByFloor)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([floor, rooms]) => (
              <section key={floor} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <span className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {floor}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      Floor {floor}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {rooms.length} {rooms.length === 1 ? 'room' : 'rooms'} available
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {rooms.map((room) => (
                    <Link
                      key={room.id}
                      href={`/room/${room.id}`}
                      className="group block"
                    >
                      <div className="h-full bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                                <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                                  {room.roomNumber}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                                  Room Number
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                Floor
                              </span>
                              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                {room.floor}
                              </span>
                            </div>
                            <div className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                Items
                              </span>
                              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                {room.items.length}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                              <span className="text-sm font-medium">View Details</span>
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}
