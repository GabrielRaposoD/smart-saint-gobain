// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper, SelectInput } from '@components/index';
import { Option, ButtonState, SmartStep } from '@typings/index';
import { Field, useFormikContext } from 'formik';
import { trainings } from '@mocks/trainings';

const Training: SmartStep = () => {
  const formik = useFormikContext<any>();

  const mappedTraining: Option[] = trainings.map((t) => {
    return { value: t, label: t.name };
  });

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
          <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
            <label> Selecione um Curso</label>
            <Field
              name='training'
              options={mappedTraining}
              component={SelectInput}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={
            formik.values.training ? ButtonState.normal : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};

export { Training };
