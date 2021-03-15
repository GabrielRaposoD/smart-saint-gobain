// Module Imports
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// Components Import
import { Logo, Stepper, SelectInput, TextInput } from '@components/index'
import { SmartStep } from '@typings/index'
import { useInfo } from '@store/useInfo'

const ProductInfo: SmartStep = () => {
  return (
    <div className="md:px-0 md:min-h-0 flex flex-col items-start justify-between h-full min-h-screen px-6">
      <div className="md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10">
        <div className="flex flex-col">
          <div className="md:mt-0 mt-6">
            <Logo />
          </div>
          <div className="mt-16">
            <h1 className="md:text-4xl text-2xl font-bold leading-snug text-gray-800">
              Quais são as informações do seu <br />
              anúncio?
            </h1>
            <h3 className="mt-3 text-base font-medium text-gray-600">
              Insira as informações abaixo para criarmos seus anúncios. Elas
              aparecerão no material final.
            </h3>
            {/* <div className='mt-6 text-base font-medium text-gray-600'>
                <label> Qual a linha do produto?</label>
                <SelectInput
                  isDisabled={!company}
                  options={mappedProducts}
                  value={product}
                  onChange={(value) => setProduct(value)}
                />
              </div>
              <div className='mt-6 text-base font-medium text-gray-600'>
                <label> Qual o produto?</label>
                <SelectInput
                  isDisabled={!company}
                  options={mappedProducts}
                  value={product}
                  onChange={(value) => setProduct(value)}
                />
              </div> */}
            <div className="mt-4">
              <TextInput id="firstName" name="firstName" placeholder="Digite" />
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <Stepper />
        </div>
      </div>
    </div>
  )
}

ProductInfo.validation = Yup.object({
  firstName: Yup.string()
    .min(3, 'Nome requer ao menos 3 caracteres')
    .max(17, 'O Nome não pode passar de 17 caracteres')
    .required('This field is required.')
})

export { ProductInfo }
