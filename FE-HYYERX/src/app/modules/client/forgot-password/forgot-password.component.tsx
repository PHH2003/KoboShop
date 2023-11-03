import { css } from '@emotion/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import ButtonComponent from '~/app/components/parts/button/button.component'
import { schemaForgotPassword } from '../utils/validateForm'
import { sendEmail } from '~/app/api/auth/auth.api'
import toast from 'react-hot-toast'

const ForgotPasswordComponent = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaForgotPassword)
  })
  const handleSendemail = (data:any) => {
    sendEmail(data).then((res)=>{
      if(res){
        toast.success('Successfully emailing passwords')
        navigate('/login')
      }
    },
    (err:any)=>{
      toast.error(err.response.data)
    })
  }
  return (
    <div className='relative h-[90vh]' css={cssRegister}>
      <div className=''>
        <img src='https://authorize.kobo.com/Images/prism_large.png' alt='' className='w-full' />
      </div>
      <div className='absolute top-[20px] left-[40%] '>
        <img
          className='mx-auto'
          src='https://res.cloudinary.com/dpfndtcya/image/upload/t_logo-kobo-web-admin/v1696241284/rakuten-kobo1-removebg-preview_efmks8.png'
          alt=''
        />
        <div className='bg-white border p-4 rounded w-[300px] m-auto'>
          <Link to={'/login'}>
            <a className='text-gray-700 font-semibold hover:text-red-700 float-right underline'>Login</a>
          </Link>

          <div className='mt-10'>
            <h2 className='text-center'>Forgot Password</h2>
          </div>
          <form action="" onSubmit={handleSubmit(handleSendemail)}>
          <Controller
                control={control}
                name='email'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <input type='email' value={value} placeholder='email' onChange={onChange} ref={ref} />
                )}
              />
              {errors && <span className='text-red-800 font-serif'>{errors.email?.message}</span>}

          <p className='text-[12px] text-gray-800 font-semibold mt-3'>
            By continuing you confirm that you agree to the Terms of Use and confirm that you have read the Privacy
            Policy, updated August 15, 2023
          </p>

          <ButtonComponent handleColor title={'Get Password'} className='w-full mt-3 hover:bg-[#595959]' />
          </form>
        </div>
        
        <div className='w-[300px] m-auto text-center mt-4 text-[13px] font-bold text-gray-900'>
          Terms of Use Privacy Policy 2023 Rakuten Kobo Inc. This site is protected by hCaptcha and its Privacy Policy
          and Terms of Service apply.
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordComponent

export const cssRegister = css`
  input {
    border: 1px solid;
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    width: 100%;
  }
  h2 {
    font-size: 2.2rem;
    font-family: 'Trebuchet MS', Trebuchet, Arial, Helvetica, sans-serif;
    color: #000;
    font-weight: 400;
  }
`
