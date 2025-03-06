import './globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PwaInstallButton from '@/components/PwaInstallButton';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => console.log('SW registered:', registration))
          .catch((error) => console.error('SW registration failed:', error));
      });
    }
  }, [router]);

  return <>
      <Component {...pageProps} />;
      <PwaInstallButton />
  </>
}
