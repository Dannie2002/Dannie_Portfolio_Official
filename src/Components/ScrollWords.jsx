import React from 'react';
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';
import Scribble from '../Components/Scribble'


const ScrollWords = () => {
  return (
    <section className='mt-12'>
   <ScrollVelocityContainer className='z-90'>
              
    
    <ScrollVelocityRow baseVelocity={-3} className='lg:p-0 '>
        <div className='flex px-6 items-center justify-center gap-6 min-w-[400px]' >
        <h4 className='uppercase zalando font-bold text-[#161819]  text-[58px]'><span className='text-(--secondary-color)'>Thank You</span></h4>
    
        </div>
            <h2 className='uppercase zalando font-bold text-[#161819]  text-[58px]'><span className='text-[#978F66]'>For Visiting.</span></h2>
    </ScrollVelocityRow>
  
             
 </ScrollVelocityContainer> 

 </section>
  );
};

export default ScrollWords;