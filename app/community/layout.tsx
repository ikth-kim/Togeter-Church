import type { ReactNode } from 'react';

import CommunitySubnav from '@/components/CommunitySubnav';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <CommunitySubnav />
        {children}
      </div>
      <Footer />
    </>
  );
}
