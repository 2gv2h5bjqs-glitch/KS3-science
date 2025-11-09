'use client';
import { useEffect } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(()=>{if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js');},[]);
  return <html><head><link rel="manifest" href="/manifest.json"/><title>KS3 Science + AI Tutor</title></head><body>{children}</body></html>;
}
