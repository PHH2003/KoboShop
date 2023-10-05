import React from 'react'
import LinkDetail from './components/link-detail/link-detail.component'
import InfoDetail from './components/info-detail/info-detail.component'
import BuyDetail from './components/buy-detail/buy-detail.component'
import IdentityComponent from './components/books-related/books-related.component'
import RobertsComponent from './components/more-by-author/more-by-author.component'
import AllReviewBook from './components/all-review-book/all-review-book.component'
import ReviewComponent from '~/app/components/parts/review/review.component'


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
      <hr className='my-6' />

            
            <div>
                <IdentityComponent/>
            </div>
      <hr className='my-6' />

            <div>
                <RobertsComponent/>
            </div>
      <hr className='my-6' />

            <div>
                <AllReviewBook/>
            </div>
            <div>
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
                <ReviewComponent/>
            </div>
        </div>
    )
}

export default DetailComponent