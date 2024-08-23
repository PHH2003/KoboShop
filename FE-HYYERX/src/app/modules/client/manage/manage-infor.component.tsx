import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import MenuSideBar from '~/app/components/stack/menu-sidebar/menu-sidebar.component'
import MainManagementInfor from './components/main-manage-infor/main-manage-infor.component'
interface ManageComponentProps {
    props?: any
}

const ManageInforComponent: FunctionComponent<ManageComponentProps> = () => {
    return (
        <div css={cssManage} className='sm:w-[1140px] m-auto sm:flex mt-16 '>
            <div>
                <MenuSideBar />
            </div>
            <div>
                <MainManagementInfor/>
            </div>
        </div>
    )
}

export default ManageInforComponent

const cssManage = css`
`