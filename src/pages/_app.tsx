// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

// Add 'weight' and correct the subsets property
const poppins = Poppins({
  subsets: ['latin'], // Correctly pass 'subsets'
  weight: ['400', '700'], // Define the font weights you want to use (normal and bold as an example)
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
