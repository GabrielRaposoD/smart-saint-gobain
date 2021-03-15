// Module Imports
import React from 'react'

// Application Import
import { MainLayout } from '@layout/index'
import { useInfo } from '@store/useInfo'

// Components Import
import { items } from '@mocks/screenComponents'
import { FormikWizard } from '@components/FormikWizard'
import { items as StepItems } from 'mocks/screenComponents'
import * as Yup from 'yup'
import { Form } from 'formik'
import { StepContext } from 'context/formStepsContext'

const initialValues = {
  template: null,
  line: null,
  product: null,
  valueReal: '',
  valueCents: '',
  shopPhone: '',
  shopAddress: '',
  shopLogo: null,
  track: null,
  name: '',
  email: '',
  shopName: ''
}

const emptyYupValidation = Yup.object().shape({})

const IndexPage: React.FC = () => {
  const { video } = useInfo()

  async function handleSubmit(values) {
    console.log(values)
  }

  return (
    <FormikWizard
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchemas={StepItems.map(
        (i) => i.validation || emptyYupValidation
      )}
    >
      {({ currentStep, setCurrentStep, values }) => {
        const item = StepItems[currentStep]

        return (
          <StepContext.Provider value={{ currentStep, setCurrentStep }}>
            {JSON.stringify(values)}
            <MainLayout
              img={item.img}
              isCover={item.isCover}
              hasCard={item.hasCard}
              cardImg={video.thumbnail_url || item.cardImg}
              hasMobileImg={item.hasMobileImg}
              cardWide={item.cardWide}
            >
              <Form className="h-full">
                <item.Component
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </Form>
            </MainLayout>
          </StepContext.Provider>
        )
      }}
    </FormikWizard>
  )
}

export { IndexPage }
