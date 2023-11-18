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
        <div css={cssMenuSideBar} className='w-[100%]]sm:w-[200px] w-full'>
            <div className='flex items-center flex-col sm:flex-row'>
                <div className='mb-4 sm:mb-0'>
                    <img src="https://pubcdn.ivymoda.com/ivy2//images/v2/assets/user-avatar-placeholder.png" alt="" className='w-[50px]' />
                </div>
                <div>
                    <p className='font-semibold text-[17px] sm:px-4 text-center sm:text-left'>Phan Huy Hiep</p>
                </div>
            </div>

            <div>
                <ul className='text-center sm:text-left'>
                    <li className='flex justify-center items-center'>

                        <p><BiSolidUserBadge className='text-[22px]' /></p> 
                        <p className='px-3'>account information</p>
                    </li>
                    <li className='flex justify-center items-center'>
                        <p><RiLuggageCartFill className='text-[22px]' /></p>
                         <p className='px-3'> Order management</p>
                    </li>
                    <li className='flex justify-center items-center'>
                        <p><BiSupport className='text-[22px]' /></p>
                        <a className='px-3'>Customer support</a>
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

@media (min-width: 0) and (max-width: 739px) {
    border-right:none;
    .w-full {
        max-width: 100%;
    }
    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
}`