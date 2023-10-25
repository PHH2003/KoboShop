import { css } from '@emotion/react'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { FaMoneyCheckAlt } from "react-icons/fa"

interface IPaymentComponent {
    control: any,
    errors: any
}

const PaymentComponent: FC<IPaymentComponent> = ({control,errors}) => {
    return (
        <div css={cssPayment}>
            <div className='flex justify-between'>
                <h2 className='text-[17px] font-semibold text-red-700'>Payment</h2>
                <em className='text-gray-400'>* indicates a required field</em>
            </div>
            <div className='flex justify-between'>
                <div>
                    <form action="" className='w-[200px]'>
                    <div>
                            <Controller
                                control={control}
                                name="fullname"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='fullname' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.fullname?.message}</span>}
                        </div> <br />
                        <div>
                            <Controller
                                control={control}
                                name="phoneNumber"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='phoneNumber' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.phoneNumber?.message}</span>}
                        </div><br />
                        <div>
                            <Controller
                                control={control}
                                name="city"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='city' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.city?.message}</span>}
                        </div> <br />
                        <div>
                            <Controller
                                control={control}
                                name="district"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='district' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.district?.message}</span>}
                        </div><br />
                        <div>
                            <Controller
                                control={control}
                                name="commune"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='commune' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.commune?.message}</span>}
                        </div> <br />
                        <div>
                            <Controller
                                control={control}
                                name="detailAddress"
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error } }) => (
                                    <input type="text" value={value} placeholder='detailAddress' onChange={onChange} ref={ref} />
                                )}
                            />
                            {errors && <span className="text-red-800 font-semibold">{errors.detailAddress?.message}</span>}
                        </div> <br />                        
                    </form>
                </div>
                <div>
                    <div className='flex mt-9'>
                        <p className='px-4'><FaMoneyCheckAlt className='text-red-800 text-[30px]' /></p> <p>Pay with vnPay</p>
                    </div>
                    <div className='flex mt-3'>
                        <p className='px-4'><FaMoneyCheckAlt className='text-red-800 text-[30px]' /></p> <p>Payment on delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentComponent

const cssPayment = css`
form {
    margin: 20px auto;
}
span {
    font-weight: bold;
}
input[type="text"] {
    width: 330px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}
`