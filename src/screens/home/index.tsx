// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';

// Components Import
import { StepsController } from '@components/StepsController';
import { items as StepItems } from 'mocks/screenComponents';
import { Form } from 'formik';
import { StepContext } from 'context/formStepsContext';

import { templates } from '@mocks/templates';
import { createVideo } from 'service/video.service';

const initialValues = {
  template: null,
  line: null,
  product: null,
  valueReal: '',
  valueCents: '',
  track: null,
  address: '',
  phone: '',
  name: '',
  email: '',
  shopName: '',
  video: { id: '' },
  logo: null,
  logoError: null,
  training: null,
};

const IndexPage: React.FC = () => {
  async function handleSubmit(values, { setFieldValue }) {
    const data = await createVideo({ ...values });
    return setFieldValue('video', data);
  }

  return (
    <StepsController initialValues={initialValues} onSubmit={handleSubmit}>
      {({ currentStep: formStep, setCurrentStep, values }) => {
        const template = templates.find(
          (t) => t.id === values.template?.id
        ) || { steps: [1, 2, 3], isHorizontalTemplate: false };
        const currentStep = template.steps[formStep] || 0;
        const item = StepItems[formStep > 0 ? currentStep - 1 : formStep];
        console.log(formStep, currentStep);

        return (
          <StepContext.Provider
            value={{ currentStep: formStep, setCurrentStep }}
          >
            {template.steps[formStep] === 9 ? (
              <Form className='w-full h-full'>
                <item.Component
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  steps={template.steps}
                />
              </Form>
            ) : (
              <MainLayout
                img={item?.img}
                isCover={item?.isCover}
                hasCard={item?.hasCard}
                cardImg={values?.video.thumbnail_url || item?.cardImg}
                hasMobileImg={item?.hasMobileImg}
                cardWide={template?.isHorizontalTemplate}
                currentStep={currentStep}
              >
                <Form className='w-full h-full'>
                  <item.Component
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    steps={template.steps}
                  />
                </Form>
              </MainLayout>
            )}
          </StepContext.Provider>
        );
      }}
    </StepsController>
  );
};

export { IndexPage };
