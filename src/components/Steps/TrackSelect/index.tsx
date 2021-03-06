// Module Imports
import React from 'react';
import { useFormikContext } from 'formik';

// Application Import
import { ButtonState, SmartStep } from '@typings/index';
import { tracks } from '@mocks/tracks';

// Components Import
import { Logo, Stepper } from '@components/index';
import { RadioInput } from '@components/RadioInput';

const TrackSelect: SmartStep = () => {
  const formik = useFormikContext<any>();

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='xl:mt-16 mt-10'>
          <h1 className='2xl:text-4xl md:text-3xl text-xl font-bold leading-snug text-gray-800'>
            Escolha uma trilha sonora para o seu anúncio
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Escolha nas opções abaixo o que melhor te atende.
          </h3>
          <div className='mt-6 text-base font-medium text-gray-600'></div>
          {tracks.map((t, i) => (
            <div className='flex flex-col mt-4 space-y-1' key={i}>
              <div className='flex flex-row space-x-1'>
                <RadioInput name='track' id='track' value={t.id} />
                <label className='self-center font-medium'>
                  Trilha Sonora {i + 1}
                </label>
              </div>
              <audio controls src={t.url} className='2xl:h-14 md:h-6 h-12' />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={
            formik.values.track !== null
              ? ButtonState.normal
              : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};

export { TrackSelect };
