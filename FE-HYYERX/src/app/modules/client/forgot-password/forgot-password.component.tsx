import { css } from "@emotion/react"
import ButtonComponent from "~/app/components/parts/button/button.component"

const ForgotPasswordComponent = () => {
    return (
        <div className="relative h-[90vh]" css={cssRegister}>
            <div className="">
                <img src="https://authorize.kobo.com/Images/prism_large.png" alt="" className='w-full' />
            </div>
            <div className="absolute top-[20px] left-[40%] ">
                <img className="mx-auto" src="https://res.cloudinary.com/dpfndtcya/image/upload/t_logo-kobo-web-admin/v1696241284/rakuten-kobo1-removebg-preview_efmks8.png" alt="" />
                <div className='bg-white border p-4 rounded w-[300px] m-auto'>
                    <a href="/login" className="text-gray-700 font-semibold hover:text-red-700 float-right underline">Login Kobo account</a>
                    <div className='mt-10'>
                        <h2 className='text-center'>Forgot Password</h2>
                    </div>
                    <input type="email" name="" id="" placeholder='Email' />
                    
                    <p className='text-[12px] text-gray-800 font-semibold mt-3'>By continuing you confirm that you agree to the Terms of Use and confirm that you have read the Privacy Policy, updated August 15, 2023</p>

                    <ButtonComponent handleColor title={"Get Password"} className="w-full mt-3 hover:bg-[#595959]" />
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

export default ForgotPasswordComponent

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