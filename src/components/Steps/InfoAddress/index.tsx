// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper, TextInput, MaskedInputField } from '@components/index';
import { ButtonState, SmartStep } from '@typings/index';

const InfoAddress: SmartStep = () => {
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
        <div className='mt-6 space-y-1'>
          <label> Insira o telefone da sua loja (com DDD)</label>
          <MaskedInputField
            mask={[
              '(',
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            name='phone'
            type='phone'
            placeholder='(11) 99999-9999'
          />
        </div>
        <div className='mt-6 space-y-1'>
          <label> Insira o endereço do seu comércio (opcional)</label>
          <TextInput id='address' name='address' placeholder='Digite' />
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper buttonState={ButtonState.normal} />
      </div>
    </div>
  );
};

export { InfoAddress };
