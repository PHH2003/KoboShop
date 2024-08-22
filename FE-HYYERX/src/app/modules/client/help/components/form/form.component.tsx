import ButtonComponent from '~/app/components/parts/button/button.component'
import toast from 'react-hot-toast'
import { Controller, useForm } from 'react-hook-form';
import { validateSupport } from '../../../utils/validateForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { createContact } from '~/app/api/contact/contact.api';

const FormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSupport)
  })
  const onSubmit = (data: any) => {
    createContact(data).then(
      (res)=>{
        if(res){
          toast.success("Sent to the admin")
        }
      },
      (err) =>{
        toast.error(err?.reponse?.data)
      }
    )
  }
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
