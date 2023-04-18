import { Inter } from 'next/font/google';

import HomePage from '@/pages/HomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return <HomePage />;
}
