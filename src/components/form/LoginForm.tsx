import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
  username: string
  passWordRequired: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('username')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='test' {...register('username')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('passWordRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.passWordRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}
