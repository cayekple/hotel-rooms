import Link from "next/link";
import { notFound } from "next/navigation";
import { hotelRooms } from "@/data/rooms";
import QRCodeDisplay from "@/components/QRCodeDisplay";

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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Back to Rooms
        </Link>

        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-zinc-200 dark:border-zinc-700">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Room {room.roomNumber}
              </h1>
              <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-lg">
                Floor {room.floor}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {room.items.length} {room.items.length === 1 ? 'item' : 'items'} in this room
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Room Items
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {room.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                          {item.description}
                        </p>
                      )}
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        Item ID: {item.id}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <QRCodeDisplay
                        value={`room:${room.id},item:${item.id}`}
                        label={item.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
