// Module Imports
import React from 'react';

// Components Import
import { Logo } from '@components/index';
import { ButtonState, SmartStep } from '@typings/index';
import { Button } from '@components/Button';

const Introduction: SmartStep = () => {
  return (
    <div className='md:px-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-full px-4 pb-10'>
      <div className='md:mt-0 mt-10'>
        <Logo />
      </div>
      <div className='md:mt-0 mt-24'>
        <h1 className='text-shaft 2xl:text-4xl text-2xl font-bold'>
          Experiência Saint-Gobain
        </h1>
        <h3 className='text-shaft 2xl:text-2xl lg:block hidden mt-3 text-base font-medium'>
          Crie seu próprio anúncio e compartilhe com seus
        </h3>
        <h3 className='text-shaft 2xl:text-2xl lg:block hidden text-base font-medium'>
          clientes.
        </h3>
        <h3 className='text-shaft 2xl:text-2xl lg:hidden mt-3 text-base font-medium'>
          Crie seu próprio anúncio e compartilhe com seus clientes.
        </h3>
      </div>
      <div className='md:mt-0 w-full mt-24'>
        <h6 className='text-shaft 2xl:text-base text-xs tracking-wide'>
          Ao clicar em Criar anúncio, toda a informação inserida e criação dos
          materiais é de total responsabilidade do criador.
        </h6>
        <div className='mt-6'>
          <div className='flex justify-start w-full'>
            <Button title='Começar' state={ButtonState.normal} type='submit' />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Introduction };
