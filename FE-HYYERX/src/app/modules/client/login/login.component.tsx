import { css } from "@emotion/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import ButtonComponent from "~/app/components/parts/button/button.component"
import { schemaLogin} from "../utils/validateForm"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { login } from "~/app/api/auth/auth.api"

const LoginComponent = () => {
    const navigate = useNavigate()
    const { handleSubmit, control, formState: {errors}, } = useForm({
        resolver: yupResolver(schemaLogin)
    })
    const onSubmit = (data: any) => {
       login(data).then((res)=>{
        if(res){
            localStorage.setItem('accessToken', res.accessToken)
            toast.success('Singin success')
            navigate('/')
        }
       },
       (err)=>{
        toast.error(err?.response?.data)
    }
       )
        
    }
    return (
        <div className="relative h-[90vh]" css={cssLogin}>
            <div>
                <img src="https://authorize.kobo.com/Images/prism_large.png" alt="" className='w-full' />
            </div>
            <div className="absolute top-[20px] left-[40%]">
                <img className="mx-auto" src="https://res.cloudinary.com/dpfndtcya/image/upload/t_logo-kobo-web-admin/v1696241284/rakuten-kobo1-removebg-preview_efmks8.png" alt="" />
                <div className='bg-white border p-4 rounded w-[300px] m-auto'>
                    <Link to={"/register"}> <a href="#" className="text-gray-700 font-semibold hover:text-red-700 float-right underline">Create account</a></Link>
                    <div className='mt-10'>
                        <h2 className='text-center'>Login</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
  

                        <div>
                            <Controller
                                control={control}
                                name="email"
                                render={({ 
                                    field: { onChange, value, ref },
                                    fieldState:{error}}) => (
                                    <input type="email" value={value} placeholder="email" onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-serif">{errors.email?.message}</span>}
                        </div>

                        <div>
                            <Controller
                                control={control}
                                name="password"
                                render={({ 
                                    field: { onChange, value, ref },
                                    fieldState:{error}}) => (
                                    <input type="password" value={value} placeholder="password" onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-serif">{errors.password?.message}</span>}


                        </div>
                     <p className='text-[12px] text-gray-800 font-semibold mt-3'>By continuing you confirm that you agree to the Terms of Use and confirm that you have read the Privacy Policy, updated August 15, 2023</p>
                    <ButtonComponent handleColor title={"Login"} className="hover:bg-[#595959] w-full mt-3" />
                    </form>

                    <a href="/forgotpassword" className="py-4 text-[13px] font-bold underline">Forgot password ?</a>

                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Facebook.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">login with Facebook</p>
                    </div>

                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Twitter.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">login with Twitter</p>
                    </div>

                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Instagram.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">login with Instagram</p>
                    </div>
                </div>
                <div className="w-[300px] m-auto text-center mt-4 text-[13px] font-bold text-gray-900">
                    Terms of Use Privacy Policy
                    2023 Rakuten Kobo Inc.

                    This site is protected by hCaptcha and its Privacy Policy and Terms of Service apply.
                </div>
            </div>


        </div>

    )
}

export default LoginComponent

export const cssLogin = css`
input{
    border: 1px solid;
    padding:5px;
    margin-top:15px;
    border-radius:5px;
    width:100%;
}
h2{
    font-size: 2.2rem;
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    color: #000;
    font-weight: 400;
}
`