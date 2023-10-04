import { css } from '@emotion/react'
import { FaMoneyCheckAlt } from "react-icons/fa"

const PaymentComponent = () => {
    return (
        <div css={cssPayment}>
            <div className='flex justify-between'>
                <h2 className='text-[17px] font-semibold text-red-700'>Payment</h2>
                <em className='text-gray-400'>* indicates a required field</em>
            </div>
            <div className='flex justify-between'>
                <div>
                    <form action="">
                        <span>name</span><br />
                        <input type="text" /> <br />

                        <span>name</span><br />
                        <input type="text" /> <br />
                        <span>name</span><br />
                        <input type="text" /> <br />
                        <span>name</span><br />
                        <input type="text" /> <br />
                        <span>name</span><br />
                        <input type="text" /> <br />
                    </form>
                </div>
                <div>
                    <div className='flex mt-9 '>
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