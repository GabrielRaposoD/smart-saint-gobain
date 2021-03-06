// Module Imports
import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useFormikContext } from 'formik'

// Components Import
import { Logo } from '@components/index'

// Applications Import
import { BiLoaderAlt } from 'react-icons/bi'
import { SmartStep } from '@typings/index'

const queryClient = new QueryClient()

const LoadingVideo: SmartStep = ({ currentStep, setCurrentStep, steps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingVideoComponent
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        steps={steps}
      />
    </QueryClientProvider>
  )
}

const LoadingVideoComponent: SmartStep = ({
  setCurrentStep,
  currentStep,
  steps
}) => {
  const myHeaders = new Headers()
  const formik = useFormikContext<any>()

  myHeaders.append('external-id', 'c1ca2a24-737a-44ce-8210-5881de5d74cf')
  myHeaders.append('token', '21c4c6cb615135aa325f21df9818f5dd')
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect
  }
  const { data } = useQuery(
    'repoData',
    () =>
      fetch(
        `https://restless-boat-911d.gabriel-raposo.workers.dev/?https://api.chiligumvideos.com/api/videos/${formik.values.video.id}`,
        requestOptions
      ).then((res) => res.json()),
    {
      refetchInterval: 5000,
      enabled: Boolean(formik.values.video.id),
      cacheTime: 0,
      keepPreviousData: false,
      refetchOnMount: true,
      initialData: null
    }
  )

  useEffect(() => {
    if (data && data.processed) {
      formik.setFieldValue('video', data)
      setCurrentStep(steps.length - 1)
    }
  }, [data])

  return (
    <div className="flex flex-col items-start min-h-screen px-6 md:px-0">
      <div className="flex flex-col items-center w-full py-20 md:px-40 md:items-start">
        <Logo />
      </div>
      <div className="flex flex-col items-center self-center justify-center mt-40">
        <BiLoaderAlt className="text-9xl animate-spin text-primary" />
        <h1 className="text-xl font-bold leading-snug text-gray-800 2xl:text-4xl md:text-3xl">
          Estamos Criando o seu an??ncio.
        </h1>
        <h3 className="mt-3 text-base font-medium text-gray-600 md:text-xl">
          Assim que o an??ncio estiver criado, voc?? poder?? fazer download por
          aqui mesmo. Mas tamb??m te enviaremos um link por e-mail.
        </h3>
      </div>
    </div>
  )
}

export { LoadingVideo }
