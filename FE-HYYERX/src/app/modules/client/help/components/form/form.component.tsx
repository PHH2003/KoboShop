import ButtonComponent from '~/app/components/parts/button/button.component'
import { useState } from 'react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import { validateSupport } from '../../../utils/validateForm';
import { yupResolver } from '@hookform/resolvers/yup';

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateSupport)
  })
  const onSubmit = (data: any) => {

  }
  // const [values, setValues] = useState({
  //   fullname: '',
  //   email: '',
  //   message: ''
  // })
  // const handleValue = (e: any) => {
  //   setValues((values) => ({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   }))

  // }

  // const sendEmail = (e: any) => {
  //   e.preventDefault()
  //   emailjs.send(
  //     'service_9jwonbg',
  //     'template_vshb50c',
  //     values,
  //     'ke1yKLn-ThEsICxpr').then(
  //       (result: any) => {
  //         toast.success("Feedback sent successfully")
  //       },
  //       (error: any) => {
  //         toast.success("Response has not been sent")
  //       }
  //     )
  // }
  return (
    <div>
      <div className='ml-11' >
        <h2 className='font-semibold font-mono'>
          Please make sure to provide correct email so that we can contact you for support.
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='my-3'>
            <Controller
              control={control}
              name='fullname'
              render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                <input placeholder='Fullname' className='mr-4 mt-2 w-60 border focus:outline-none p-1 border-gray-400 rounded text-lg' type='text' value={value} onChange={onChange} ref={ref} />
              )}
            />{errors && <span className='text-red-800'>{errors.fullname?.message}</span>}
          </div>

          <div className='my-3'>
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                <input placeholder='Email' className='mr-4 mt-2 w-60 border focus:outline-none p-1 border-gray-400 rounded text-lg' type='text' value={value} onChange={onChange} ref={ref} />
              )}
            />{errors && <span className='text-red-800'>{errors.email?.message}</span>}
          </div>

          <div className='my-3'>
            <Controller
              control={control}
              name='message'
              render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                <textarea placeholder='Message' onChange={onChange} ref={ref} value={value} className='mr-4 mt-2 w-full h-[150px] border p-1 focus:outline-none border-gray-400 rounded text-lg  text-start' />
                )}
                />
                {errors && <span className='text-red-800'>{errors.message?.message}</span>}
          </div>
          {/* <div className='my-3'>
          <p className='flex'>
            Your Name <p className='text-red-600 ml-2'>*</p>
          </p>
          <input name='fullname' onChange={handleValue} type='text' className='mt-2 w-60 border focus:outline-none p-1 border-gray-400 rounded text-lg' />
        </div> */}
          {/* <div className='my-3'>
          <p className='flex'>
            Your Email <p className='text-red-600 ml-2'>*</p>
          </p>
          <input name='email' onChange={handleValue} type='text' className='mt-2 w-60 border focus:outline-none p-1 border-gray-400 rounded text-lg' />
        </div>
        <div>
          <p className='flex'>
            Your Message, Question, Comment, or Testimonial <p className='text-red-600 ml-2'>*</p>
          </p>
          <textarea name='message' onChange={handleValue} className='mt-2 w-[450px] h-[200px] border p-1 focus:outline-none border-gray-400 rounded text-lg  text-start' />
        </div> */}
          <div className='my-3'>
            <ButtonComponent handleColor title={'Submit'} className='rounded hover:bg-[#595959] mt-3 w-[100px]' />
            <a href='#' className='ml-4 underline font-semibold'>
              Cancel
            </a>
          </div>
        </form>

      </div>
    </div>
  )
}
export default FormComponent
