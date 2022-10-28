import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface InputFieldProps {
  registerName: string
  placeholder: string
  type: string
}
function InputField({ registerName, placeholder, type }: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <input
        type={type}
        id='username'
        className='bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full'
        placeholder={placeholder}
        {...register(registerName, { required: 'this is a required message' })}
      />
      <ErrorMessage
        errors={errors}
        name={registerName}
        render={({ message }) => <p>{message}</p>}
      />
    </>
  )
}

export default InputField
