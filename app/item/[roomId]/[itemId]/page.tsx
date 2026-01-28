import Link from "next/link";
import { notFound } from "next/navigation";
import { hotelRooms } from "@/data/rooms";
import QRCodeDisplay from "@/components/QRCodeDisplay";

export function generateStaticParams() {
  const params: { roomId: string; itemId: string }[] = [];

  hotelRooms.forEach((room) => {
    room.items.forEach((item) => {
      params.push({
        roomId: room.id,
        itemId: item.id,
      });
    });
  });

  return params;
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ roomId: string; itemId: string }>;
}) {
  const { roomId, itemId } = await params;
  const room = hotelRooms.find((r) => r.id === roomId);

  if (!room) {
    notFound();
  }

  const item = room.items.find((i) => i.id === itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            <Link
              href={`/room/${room.id}`}
              className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group w-fit"
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
              Back to Room {room.roomNumber}
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                  <svg className="w-8 h-8 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                    {item.name}
                  </h1>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      Room {room.roomNumber}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                      Floor {room.floor}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="space-y-8">
                {/* Item Details Section */}
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    Item Details
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                          Description
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {item.description || 'No description available'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Item ID</span>
                        <span className="text-lg font-mono font-semibold text-zinc-900 dark:text-zinc-50">
                          {item.id}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">Item Name</span>
                        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Information Section */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    Location
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Room Number</span>
                      <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {room.roomNumber}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Floor</span>
                      <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {room.floor}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Total Items</span>
                      <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        {room.items.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    QR Code
                  </h2>

                  <div className="flex justify-center py-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                    <QRCodeDisplay room={room} item={item} />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <Link
                    href={`/room/${room.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    View All Room Items
                  </Link>

                  <Link
                    href="/"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
