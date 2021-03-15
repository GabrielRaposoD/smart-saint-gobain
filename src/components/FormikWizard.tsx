import { useMemo, useState, createContext } from 'react'
import { Formik } from 'formik'
import { StepContext } from 'context/formStepsContext'

export const FormikWizard = ({
  validationSchemas,
  onSubmit,
  children,
  initialValues: customInitialValues
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const validationSchema = useMemo(
    () => validationSchemas.reduce((prev, current) => prev.concat(current)),
    [validationSchemas]
  )
  const initialValues = useMemo(
    () => customInitialValues || validationSchema.default(),
    [validationSchema, customInitialValues]
  )
  const validationSchemasCascading = useMemo(
    () =>
      validationSchemas.reduce((prev, current) => {
        const previousSchema = prev.length === 0 ? null : prev[prev.length - 1]
        return prev.concat(
          previousSchema ? previousSchema.concat(current) : current
        )
      }, []),
    [validationSchemas]
  )

  return (
    <Formik
      validationSchema={validationSchemasCascading[currentStep]}
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        if (currentStep === validationSchemas.length - 1) {
          return onSubmit(values, actions)
        }

        setCurrentStep((v) => v + 1)
      }}
    >
      {(formik) => children({ ...formik, currentStep, setCurrentStep })}
    </Formik>
  )
}
