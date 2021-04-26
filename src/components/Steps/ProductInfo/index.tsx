// Module Imports
import React from 'react';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper, SelectInput, TextInput } from '@components/index';
import { SmartStep, ButtonState } from '@typings/index';
import { Field, useFormikContext } from 'formik';
import { productsLines } from '@mocks/products';

const ProductInfo: SmartStep = () => {
  const formik = useFormikContext<any>();
  const mappedProductLines = productsLines.map((p) => {
    return { value: p, label: p.name };
  });

  return (
    <div className='md:px-0 md:min-h-0 flex flex-col items-start justify-between h-full min-h-screen px-6'>
      <div className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
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
              <label> Qual a linha do produto?</label>
              <Field
                name='line'
                options={mappedProductLines}
                component={SelectInput}
              />
            </div>
            <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
              <label> Qual o produto?</label>
              <Field
                name='product'
                disabled={formik.values.line !== null ? false : true}
                options={
                  formik.values.line
                    ? formik.values.line.products.map((p) => {
                        return { value: p, label: p.name };
                      })
                    : null
                }
                component={SelectInput}
              />
            </div>
            {formik.values.template.hasPrice && (
              <>
                <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
                  <label> Qual o valor em reais? (Ex:35)</label>
                  <TextInput
                    id='valueReal'
                    name='valueReal'
                    placeholder='Digite'
                  />
                </div>
                <div className='2xl:mt-6 mt-3 space-y-1 text-base font-medium text-gray-600'>
                  <label> Qual o valor em centavos? (Ex:99)</label>
                  <TextInput
                    id='valueCents'
                    name='valueCents'
                    placeholder='Digite'
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='w-full mt-6'>
          <Stepper
            buttonState={
              formik.values.product &&
              formik.values.line &&
              !formik.errors.valueReal &&
              !formik.errors.valueCents
                ? ButtonState.normal
                : ButtonState.disabled
            }
          />
        </div>
      </div>
    </div>
  );
};

ProductInfo.validation = Yup.object({
  valueCents: Yup.string().max(2, 'O valor só pode ter no máximo 2 caracteres'),
  valueReal: Yup.string().max(3, 'O valor só pode ter no máximo 3 caracteres'),
});

export { ProductInfo };
