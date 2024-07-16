import { FaLocationArrow } from 'react-icons/fa6';

import { Spotlight } from '@/components/ui/SpotLight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import CustomButton from '@/components/atoms/CustomButton/CustomButton';
import GridGlobe from '@/components/ui/GridGlobe';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      {/* <div className='flex-row'>

      </div> */}

      <div className='flex flex-row justify-center relative my-20 z-10 '>
        <div className='max-w-[69vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col justify-center'>
          <p className='uppercase tracking-widest text-xs text-blue-100 max-w-80'>
            SOFTWARE ENGINEER
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words='Building Scalable & Reliable Software'
            className='text-[60px] md:text-5xl lg:text-6xl'
          />

          <p className=' md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Ifamust, a mobile Developer based in New York. I am
            extremely passionate in building high quality, scalable application
            using Next.js, and React Native. With a keen focus on user
            Experience, detail oriented approach, I can build anything.
          </p>

          <a href='#about'>
            <CustomButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>

        <div className=' w-1/2 '>
          <GridGlobe />
        </div>
      </div>
    </div>
  );
};

export default Hero;
