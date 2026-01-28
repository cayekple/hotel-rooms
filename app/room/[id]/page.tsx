import Link from "next/link";
import { notFound } from "next/navigation";
import { hotelRooms } from "@/data/rooms";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import ScrollToItem from "@/components/ScrollToItem";

export function generateStaticParams() {
  return hotelRooms.map((room) => ({
    id: room.id,
  }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = hotelRooms.find((r) => r.id === id);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      <ScrollToItem />
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group mb-4"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Rooms
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                <svg className="w-8 h-8 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                  Room {room.roomNumber}
                </h1>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                    Floor {room.floor}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                    {room.items.length} {room.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Room Inventory
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Scan QR codes to view item details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {room.items.map((item) => (
            <div
              key={item.id}
              id={`item-${item.id}`}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-200 dark:border-zinc-800 overflow-hidden scroll-mt-24"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6">
                  {/* Item Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Item ID</span>
                        <span className="text-sm font-mono font-medium text-zinc-900 dark:text-zinc-50">
                          {item.id}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Room</span>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {room.roomNumber}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Floor</span>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {room.floor}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center items-center py-4 border-t border-zinc-200 dark:border-zinc-800">
                    <QRCodeDisplay
                      room={room}
                      item={item}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
