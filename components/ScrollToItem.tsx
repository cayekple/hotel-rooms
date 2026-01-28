'use client';

import { useEffect } from 'react';

export default function ScrollToItem() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(hash);

      if (element) {
        // Delay scroll to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add a highlight effect
          element.classList.add('ring-2', 'ring-zinc-400', 'dark:ring-zinc-500');

          // Remove highlight after 3 seconds
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-zinc-400', 'dark:ring-zinc-500');
          }, 3000);
        }, 100);
      }
    }
  }, []);

  return null;
}
