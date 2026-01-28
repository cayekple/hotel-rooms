'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import type { HotelRoom, RoomItem } from '@/types';

interface QRCodeDisplayProps {
  room: HotelRoom;
  item: RoomItem;
}

export default function QRCodeDisplay({ room, item }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Create URL with item details in hash for GitHub Pages deployment
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const basePath = process.env.NODE_ENV === 'production' ? '/hotel-rooms' : '';
      const roomUrl = `${baseUrl}${basePath}/room/${room.id}#item-${item.id}`;

      QRCode.toCanvas(canvasRef.current, roomUrl, {
        width: 220,
        margin: 2,
        color: {
          dark: '#18181b',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      });
    }
  }, [room, item]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-white p-3 rounded-xl shadow-sm border border-zinc-200">
        <canvas ref={canvasRef} className="rounded-lg" />
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
          Scan to view room details
        </p>
      </div>
    </div>
  );
}
