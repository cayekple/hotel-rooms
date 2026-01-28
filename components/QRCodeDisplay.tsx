'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeDisplayProps {
  value: string;
  label?: string;
}

export default function QRCodeDisplay({ value, label }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="bg-white rounded-lg p-2" />
      {label && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-center">
          {label}
        </p>
      )}
    </div>
  );
}
