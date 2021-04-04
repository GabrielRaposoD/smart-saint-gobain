// Module Imports
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useFormikContext } from 'formik';

// Components Import
import { Logo } from '@components/index';

// Applications Import
import { BiLoaderAlt } from 'react-icons/bi';
import { SmartStep } from '@typings/index';

const queryClient = new QueryClient();

const LoadingVideo: SmartStep = ({ currentStep, setCurrentStep }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingVideoComponent
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </QueryClientProvider>
  );
};

const LoadingVideoComponent: SmartStep = ({ setCurrentStep, currentStep }) => {
  const myHeaders = new Headers();
  const formik = useFormikContext<any>();

  myHeaders.append('external-id', 'c1ca2a24-737a-44ce-8210-5881de5d74cf');
  myHeaders.append('token', '21c4c6cb615135aa325f21df9818f5dd');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

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
      initialData: null,
    }
  );

  useEffect(() => {
    if (data && data.processed) {
      formik.setFieldValue('video', data);
      setCurrentStep(currentStep + 1);
    }
  }, [data]);

  return (
    <div className='md:px-0 flex flex-col items-start min-h-screen px-6'>
      <div className='md:px-40 md:items-start flex flex-col items-center w-full py-20'>
        <Logo />
      </div>
      <div className='flex flex-col items-center self-center justify-center mt-40'>
        <BiLoaderAlt className='text-9xl animate-spin text-primary' />
        <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
          Aguarde, estamos criando seu vídeo
        </h1>
        <h3 className='md:text-xl mt-3 text-base font-medium text-gray-600'>
          Assim que o vídeo estiver pronto, enviaremos o link de download para o
          seu e-mail.
        </h3>
      </div>
    </div>
  );
};

export { LoadingVideo };
