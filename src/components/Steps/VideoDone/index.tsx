// Module Imports
import React from 'react'

// Components Import
import { Logo } from '@components/index'
import downloadUrl from '@utils/download-url'
import { SmartStep } from '@typings/index'
import { useFormikContext } from 'formik'

const VideoDone: SmartStep = ({ setCurrentStep }) => {
  const formik = useFormikContext<any>()
  console.log(formik.values)
  return (
    <div className="flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10 md:px-0 md:min-h-0 md:pb-0">
      <div className="mt-6 md:mt-0">
        <Logo />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Seu anúncio está pronto!
        </h1>
        <h3 className="mt-3 text-base font-medium text-gray-600">
          Parabéns! Você criou um anúncio e poderá compartilhar com seus
          clientes.
        </h3>
        <div className="w-full">
          <div className="mt-6">
            <p
              className="flex flex-row items-center justify-center w-full py-2 text-lg font-normal text-center text-white border border-solid rounded-full cursor-pointer border-primary bg-primary md:w-2/3"
              onClick={() => {
                downloadUrl(
                  formik.values.template.mediaType === 'image'
                    ? formik.values.video.thumbnail_url
                    : formik.values.video.url,
                  formik.values.template.extension,
                  formik.values.farmerName
                )
              }}
            >
              Baixar anúncio
            </p>
          </div>
        </div>
      </div>
      <p
        className="mt-3 text-lg font-medium underline cursor-pointer text-darkgreen"
        onClick={() => {
          formik.resetForm()
          setCurrentStep(0)
        }}
      >
        Criar um novo anúncio
      </p>
    </div>
  )
}

export { VideoDone }
