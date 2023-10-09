import { css } from '@emotion/react'
import { FunctionComponent } from 'react'

interface MainManangeOrderProps {
    props?: any
}

const MainManangeOrder: FunctionComponent<MainManangeOrderProps> = () => {
    return (
        <div css={cssMainManangeOrder}>
            <h1>Order management</h1>

            <div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >day month Year</th>
                            <th >order status</th>
                            <th >product</th>
                            <th > total amount</th>
                            <th >actions</th>
                        </tr>
                    </thead>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td><button className='bg-red-500 text-white py-2 px-6 hover:bg-red-300'>cancel order</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainManangeOrder

const cssMainManangeOrder = css`
padding:0 40px;
h1{
    font-weight: 600;
    font-size: 24px;
}
th{
    border-top: 1px solid #f7f8f9;
    border-bottom: 1px solid #f7f8f9;
    height: 55px;
    font-size: 14px;
    line-height: 16px;
    color: #6c6d70;
    vertical-align: top;
    padding-top: 21px;
    padding-bottom: 12px;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    text-align:center
}
td{
    text-align:center
}
`