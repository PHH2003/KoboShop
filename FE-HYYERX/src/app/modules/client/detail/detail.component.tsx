import React, { useEffect } from 'react'
import LinkDetail from './components/link-detail/link-detail.component'
import InfoDetail from './components/info-detail/info-detail.component'
import BuyDetail from './components/buy-detail/buy-detail.component'
import BookRelatedCompnonent from './components/books-related/books-related.component'
import MoreByAuthorComponent from './components/more-by-author/more-by-author.component'
import AllReviewBook from './components/all-review-book/all-review-book.component'
import ReviewComponent from '~/app/components/parts/review/review.component'


const DetailComponent = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "instant",
          });
    },[])
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
                <BookRelatedCompnonent/>
            </div>
      <hr className='' />

            <div>
                <MoreByAuthorComponent/>
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