import { css } from "@emotion/react"
import { Controller, useForm } from "react-hook-form"
import ButtonComponent from "~/app/components/parts/button/button.component"
import { schemaRegister } from "../utils/validateForm"
import { yupResolver } from "@hookform/resolvers/yup";
import { register } from "~/app/api/auth/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const RegisterComponent = () => {
    const navigate = useNavigate()
    const { handleSubmit, control, formState: {errors}, } = useForm({
        resolver: yupResolver(schemaRegister)
    })
    const onSubmit = (data: any) => {
        
        register(data).then((res)=>{
            if(res) {
                toast.success('Register success')
                navigate('/login')
            }
        }, (err)=>{
            toast.error(err?.response?.data)
        }
        )
    }

    return (
        <div className="relative h-[100vh]" css={cssRegister}>
            <div className="">
                <img src="https://authorize.kobo.com/Images/prism_large.png" alt="" className='w-full' />
            </div>
            <div className="absolute top-[20px] left-[40%] ">
                <img className="mx-auto" src="https://res.cloudinary.com/dpfndtcya/image/upload/t_logo-kobo-web-admin/v1696241284/rakuten-kobo1-removebg-preview_efmks8.png" alt="" />
                <div className='bg-white border p-4 rounded w-[300px] m-auto'>
                    <a href="/login" className="text-gray-700 font-semibold hover:text-red-700 float-right underline">Login Kobo account</a>
                    <div className='mt-10'>
                        <h2 className='text-center'>Register</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Controller
                                control={control}
                                name="fullname"
                                render={({ 
                                    field: { onChange, value, ref },
                                    fieldState:{error}}) => (
                                    <input type="text" value={value} placeholder="fullname" onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-serif">{errors.fullname?.message}</span>}
                        </div>

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
                        <ButtonComponent handleColor title={"Continue"} className="hover:bg-[#595959] w-full mt-3" />  
                    </form>



                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Facebook.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">Continue with Facebook</p>
                    </div>

                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Twitter.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">Continue with Twitter</p>
                    </div>

                    <div className="flex border border-gray-300 rounded-sm items-center mt-3">
                        <img src="https://static.kobo.com/1.0.1.3568/Images/social/Instagram.png" alt="" className="px-3 py-1 w-[45px]" />
                        <p className="text-[13px] font-semibold">Continue with Instagram</p>
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

export default RegisterComponent

export const cssRegister = css`
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