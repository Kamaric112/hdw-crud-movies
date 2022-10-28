import React, { ReactNode } from 'react'
import { useFormContext, FormProvider, SubmitHandler, useForm, FieldValues } from 'react-hook-form'
import InputField from './Input/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema } from 'yup'

export interface FormProps<T> {
  children: ReactNode
  validationSchema: AnyObjectSchema
  onSubmit?: (values: T) => void
}
function Form<T extends FieldValues>({ onSubmit, validationSchema, children }: FormProps<T>) {
  const formHandler = useForm<T>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <FormProvider {...formHandler}>
      <form onSubmit={formHandler.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        {children}
      </form>{' '}
    </FormProvider>
  )
}

export default Form
