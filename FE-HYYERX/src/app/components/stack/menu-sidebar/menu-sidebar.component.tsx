import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { BiSupport } from "react-icons/bi"
import { RiLuggageCartFill } from 'react-icons/ri'
import { BiSolidUserBadge } from "react-icons/bi"
interface MenuSideBarProps {
    props?: any
}

const MenuSideBar: FunctionComponent<MenuSideBarProps> = () => {
    return (
        <div css={cssMenuSideBar} className='w-[100%]]'>
            <div className='flex items-center'>
                <div>
                    <img src="https://pubcdn.ivymoda.com/ivy2//images/v2/assets/user-avatar-placeholder.png" alt="" className='w-[50px]' />
                </div>
                <div>
                    <p className='font-semibold text-[17px] px-4'>Phan Huy Hiep</p>
                </div>
            </div>

            <div>
                <ul>
                    <li className='flex'>

                        <p><BiSolidUserBadge className='text-[22px]' /></p> <p className='px-3'>account information</p>
                    </li>
                    <li className='flex'>
                        <p><RiLuggageCartFill className='text-[22px]' /></p> <p className='px-3'> Order management</p>
                    </li>
                    <li className='flex'>
                        <p><BiSupport className='text-[22px]' /></p><p className='px-3'>Support</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuSideBar
const cssMenuSideBar = css`
border-right:1px solid gray;
li{
    padding:10px 0px;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: black;
}
`