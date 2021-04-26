// Module Imports
import React from 'react';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper, TextInput, MaskedInputField } from '@components/index';
import { SmartStep } from '@typings/index';
import { useFormikContext } from 'formik';

const InfoAddress: SmartStep = () => {
  const formik = useFormikContext<any>();
  const mask = (v) => {
    console.log(v.length);
    return v.length > 14
      ? [
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
        ]
      : [
          '(',
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ];
  };

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='mt-16'>
          <h1 className='2xl:text-4xl md:text-3xl text-xl font-bold leading-snug text-gray-800'>
            Quais são as informações do seu anúncio?
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Insira as informações abaixo para criarmos seu anúncio. Elas
            aparecerão no material finalizado.
          </h3>
        </div>
        <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
          <label> Insira o telefone da sua loja (com DDD)</label>
          <MaskedInputField
            mask={mask}
            name='phone'
            type='phone'
            placeholder='(11) 99999-9999'
          />
        </div>
        <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
          <label> Insira o endereço do seu comércio (opcional)</label>
          <TextInput id='address' name='address' placeholder='Digite' />
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper />
      </div>
    </div>
  );
};

InfoAddress.validation = Yup.object({
  phone: Yup.string().required('Este campo é obrigatório'),
  address: Yup.string(),
});

export { InfoAddress };
