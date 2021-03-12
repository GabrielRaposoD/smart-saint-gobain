// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';

const Introduction: React.FC = () => {
  return (
    <div className='md:px-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-full px-4 pb-10'>
      <div className='md:mt-0 mt-10'>
        <Logo />
      </div>
      <div className='md:mt-0 mt-24'>
        <h1 className='text-shaft md:text-4xl text-2xl font-bold'>
          Experiência Saint-Gobain
        </h1>
        <h3 className='text-shaft md:text-2xl mt-3 text-base font-medium'>
          Crie seu próprio anúncio e compartilhe com seus
        </h3>
        <h3 className='text-shaft md:text-2xl text-base font-medium'>
          clientes.
        </h3>
      </div>
      <div className='md:mt-0 w-full mt-24'>
        <h6 className='text-shaft md:text-base text-xs tracking-wide'>
          Ao clicar em Criar anúncio, toda a informação inserida e criação dos
          materiais é de total responsabilidade do criador.
        </h6>
        <div className='mt-6'>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export { Introduction };
