import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface InputFieldProps {
  name: string;
  placeholder: string;
  type: string;
}
function InputField({ name, placeholder, type = 'text' }: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type={type}
        className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
        placeholder={placeholder}
        {...register(name, { required: 'this is a required message' })}
      />
      <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
    </>
  );
}

export default InputField;
