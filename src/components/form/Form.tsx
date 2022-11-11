import React, { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm, FieldValues, UnpackNestedValue, DeepPartial } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

export interface FormProps<T> {
  children: ReactNode;
  validationSchema: AnyObjectSchema;
  onSubmit?: (values: T) => void;
  defaultValues?: any;
}
// add default values
function Form<T extends FieldValues>({ onSubmit, validationSchema, children, defaultValues }: FormProps<T>) {
  const formHandler = useForm<T>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...formHandler}>
      <form onSubmit={formHandler.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>{children}</form>{' '}
    </FormProvider>
  );
}

export default Form;
