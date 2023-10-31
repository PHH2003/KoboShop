import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import MenuSideBar from '~/app/components/stack/menu-sidebar/menu-sidebar.component'
import MainManangeOrder from './components/main-manage-order/main-manage-order.component'
interface ManageComponentProps {
    props?: any
}

const ManageComponent: FunctionComponent<ManageComponentProps> = () => {
    return (
        <div css={cssManage} className='sm:w-[1140px] m-auto flex mt-16'>
            <div className='w-[20%]'>
                <MenuSideBar />
            </div>
            <div className='w-[80%]'>
                <MainManangeOrder />
            </div>
        </div>
    )
}

export default ManageComponent

const cssManage = css`
`