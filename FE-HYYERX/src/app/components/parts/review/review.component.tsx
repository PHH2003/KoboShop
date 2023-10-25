import { useEffect } from 'react'
import StarComponent from '../star/star.component'
import { useParams } from 'react-router-dom'
import { useCommentRedux } from '~/app/modules/client/redux/hook/useCommentReducer'

const ReviewComponent = () => {
    let { id } = useParams()
    const { data: {comments}, actions: commentActions } = useCommentRedux()
    useEffect(() => {
        commentActions.getAllComments(id)
    }, [id])    
  return (
    <>
      {comments?.map((item: any, index: any) => (
        <div>
          <div className='flex justify-between mt-5' key={index +1}>
            <div className='w-[745px]'>
              <div className='flex items-center'>
                <div>
                  <p>{item.star == "1" && <StarComponent/>}</p>
                  <p>{item.star == "2" && <p className='flex'><StarComponent/><StarComponent/></p>}</p>
                  <p>{item.star == "3" && <p className='flex'><StarComponent/><StarComponent/><StarComponent/></p>}</p>
                  <p>{item.star == "4" && <p className='flex'><StarComponent/><StarComponent/><StarComponent/><StarComponent/></p>}</p>
                  <p>{item.star == "5" && <p className='flex'><StarComponent/><StarComponent/><StarComponent/><StarComponent/><StarComponent/></p>}</p>
                </div>
                <div className='px-5'>
                  <h2 className='font-semibold'>{item?.user?.fullname}</h2>
                </div>
              </div>
              <div>
                <p className='text-gray-600'>{item?.comment}</p>
                <em className='text-[13px] font-semibold'>by {item?.createdAt}</em>
              </div>
            </div>

            <div>
              <em className='text-[15px] font-semibold text-gray-500'>5 of 6 people found this review helpful</em>
            </div>
          </div>
          <hr className='mt-4 ' />
        </div>
      ))}
    </>
  )
}

export default ReviewComponent
