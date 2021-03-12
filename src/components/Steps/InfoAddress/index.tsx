// Module Imports
import React, { useState } from 'react';
import { companies } from '@mocks/companies';

// Components Import
import { Logo, Stepper } from '@components/index';
import { ButtonState, Option } from '@typings/index';
import { useInfo } from '@store/useInfo';

const InfoAddress: React.FC = () => {
  const { company, setCompany, product, setProduct } = useInfo();

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='mt-16'>
          <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
            Quais são as informações do seu anúncio?
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Escolha as informações abaixo para criarmos seu anúncio. Elas
            aparecerão no material final.
          </h3>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper buttonState={ButtonState.normal} />
      </div>
    </div>
  );
};

export { InfoAddress };
