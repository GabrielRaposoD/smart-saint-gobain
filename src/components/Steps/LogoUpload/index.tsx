// Module Imports
import React from 'react'

// Components Import
import { Logo, Stepper } from '@components/index'
import { ButtonState, SmartStep } from '@typings/index'

const LogoUpload: SmartStep = () => {
  return (
    <div className="md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10">
      <div className="flex flex-col">
        <div className="md:mt-0 mt-6">
          <Logo />
        </div>
        <div className="mt-16">
          <h1 className="md:text-4xl text-2xl font-bold leading-snug text-gray-800">
            Insira o logo da sua loja
          </h1>
          <div className="mt-10 text-base font-medium text-gray-600"></div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper buttonState={ButtonState.normal} />
      </div>
    </div>
  )
}

export { LogoUpload }
