'use client';

import EmptyContainer from '@/components/atoms/EmptyContainer/EmptyContainer';
import Approach from '@/components/organisms/Approach/Aproach';
import Experience from '@/components/organisms/Experience/Experience';
import Feature from '@/components/organisms/Feature/Feature';
import Footer from '@/components/organisms/Footer/Footer';
import Grid from '@/components/organisms/Grid/Grid';
import Hero from '@/components/organisms/Hero/Hero';
import Projects from '@/components/organisms/Projects/Projects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <EmptyContainer classNameProps='relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-4 overflow-clip'>
      <div className='text-white max-w-7xl w-full '>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Feature />
        <Projects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </EmptyContainer>
  );
}
