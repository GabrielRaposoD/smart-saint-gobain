// Module Imports
import React from 'react';
import { useFormikContext } from 'formik';

const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];
const FILE_SIZE = 2000000;

// Applications import
import { ButtonState, SmartStep } from '@typings/index';

// Components Import
import { Logo, Stepper } from '@components/index';

export const LogoUpload: SmartStep = () => {
  const formik = useFormikContext<any>();

  function updateFile(name, file: File) {
    if (!file) return null;
    if (file.size > FILE_SIZE) {
      formik.setFieldValue(name, null);
      formik.setFieldError(name, 'Foto com mais de 16Mb');
    } else {
      formik.setFieldValue(name, file);
      formik.setFieldError(name, null);
    }
  }

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <div className='flex flex-col'>
        <div className='md:mt-0 mt-6'>
          <Logo />
        </div>
        <div className='w-full mt-16'>
          <h1 className='2xl:text-4xl md:text-3xl text-xl font-bold leading-snug text-gray-800'>
            Insira o logo da sua loja
          </h1>
          <div className='rounded-xl 2xl:text-base px-6 py-3 mt-10 text-sm font-medium text-gray-800 bg-gray-200'>
            <p>Para melhor aproveitamento da sua marca, recomendamos:</p>
            <ul className=' mt-2 space-y-1 list-inside'>
              <li>- Formato PNG ou JPG</li>
              <li>- Fundo transparente</li>
              <li>- Peso máximo de 2MB</li>
            </ul>
          </div>
          <input
            type='file'
            id='logo-input'
            name='logo-input'
            className='hidden'
            accept={'image/png, image/jpeg, image/jpg'}
            onChange={(e) => updateFile('logo', e.target.files[0])}
          />
          {formik.values.logo ? (
            <div className='max-h-50 flex flex-col w-full mt-10'>
              <img
                src={URL.createObjectURL(formik.values.logo)}
                alt='Company Logo'
                className='w-40'
              />
              <label
                className='text-primary font-regular text-base underline'
                htmlFor='logo-input'
              >
                Substituir Imagem
              </label>
              <div className='rounded-xl bg-green 2xl:text-base w-full px-4 py-3 mt-10 text-sm font-thin leading-relaxed tracking-wider text-white'>
                Sua imagem foi carregada com sucesso!
              </div>
            </div>
          ) : (
            <div className='w-full mt-10'>
              <div className='w-full text-base font-medium text-gray-600'>
                <label
                  className='border-primary bg-primary 2xl:px-20 2xl:text-xl w-full px-8 py-3 font-medium text-white border border-solid rounded-full'
                  htmlFor='logo-input'
                >
                  Carregar Imagem
                </label>
              </div>
            </div>
          )}

          {formik.values.logoError && (
            <div className='rounded-xl bg-red w-full px-4 py-3 mt-10 text-base font-thin leading-relaxed tracking-wider text-white'>
              Sua imagem não está nos requisitos necessários. Tente novamente.
            </div>
          )}
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={
            formik.values.logo ? ButtonState.normal : ButtonState.disabled
          }
        />
      </div>
    </div>
  );
};
