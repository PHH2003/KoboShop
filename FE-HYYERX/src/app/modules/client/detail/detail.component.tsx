import React from 'react'
import LinkDetail from './components/link-detail/link-detail.component'
import InfoDetail from './components/info-detail/info-detail.component'
import BuyDetail from './components/buy-detail/buy-detail.component'


const DetailComponent = () => {
    return (
        <div className='w-[1140px] m-auto'>
            <div className='mt-3'>
                <LinkDetail />
            </div>
            <div className='flex justify-between mt-14'>
                <div>
                    <InfoDetail />
                </div>
                <div>
                    <BuyDetail />
                </div>
            </div>
        </div>
    )
}

export default DetailComponent