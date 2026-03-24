import type { ReactNode } from 'react';

import AboutSubnav from '@/components/about/AboutSubnav';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AboutSubnav />
        {children}
      </div>
      <Footer />
    </>
  );
}
