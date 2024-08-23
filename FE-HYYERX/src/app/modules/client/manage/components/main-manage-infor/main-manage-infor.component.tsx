import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { validateUpdatePassword } from '../../../utils/validateForm';
import { updateUser } from '~/app/api/auth/auth.api';
import InputComponent from '~/app/components/parts/input/input.component';
import ButtonSqua from '~/app/components/parts/button/buttonSqua.component';
import { title } from 'process';
type Props = {}

const MainManagementInfor = (props: Props) => {
    const navigate = useNavigate()
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validateUpdatePassword)
    });
    const onSubmitPassword = (data: any) => {
        const idUser = localStorage.getItem("userID")
        updateUser(idUser, data).then((res: any) => {
            if (res) {
                toast.success("Đổi mật khẩu thành công!")
                localStorage.removeItem("userID")
                localStorage.removeItem("accessToken")
                navigate("/login")
            }
        }, (err) => {
            toast.error(err.response.data)
        })

    }
    const arrayPass = [
        {
            title:"Mật khẩu",
            field:"password"
        },
        {
            title: "Mật khẩu mới",
            field: "newPassword"
        },
        {
            title: "Nhập lại Mật khẩu mới",
            field: "confirmNewPassword"
        },
    ]
    return (
        <div css={cssPasswordForm} className='ml-4'>
            <form onSubmit={handleSubmit(onSubmitPassword)}>
                <h3 className='text-2xl text-center mb-4'>Đổi mật khẩu</h3>
                {arrayPass.map((item: any) => {
                    return <div className='mt-10' key={item.field}>
                        <Controller
                            control={control}
                            name={item.field}
                            render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
                                return (
                                    <div className='space-y-2'>
                                        <label>{item?.title}</label>
                                        <InputComponent
                                            hideIcon={false}
                                            placeholder={item?.title}
                                            onChange={onChange}
                                            value={value}
                                            ref={ref}
                                            hasErorr={error}
                                        />
                                        {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}

                                    </div>
                                );
                            }}
                        />
                    </div>
                })}
                <ButtonSqua css={cssBtn} type={"submit"} children='Cập nhật' outline />

            </form>
        </div>
    )
}

export default MainManagementInfor

const cssPasswordForm = css`
.title{
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #221f20;
    margin-bottom: 40px;
}
label{
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #6C6D70;
}
`

const cssBtn = css`
  width:100%; 
  margin-top:50px;
  padding: 12px 24px;
  border-radius: 16px 0px;
  font-size: 16px;
  line-height: 24px;
`