// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';
import { ButtonState } from '@typings/index';

const TrackSelect: React.FC = () => {
  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='mt-16'>
          <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
            Escolha uma trilha sonora para o seu anúncio
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Escolha nas opções abaixo o que melhor te atende.
          </h3>
          <div className='mt-10 text-base font-medium text-gray-600'></div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper buttonState={ButtonState.normal} />
      </div>
    </div>
  );
};

export { TrackSelect };
