import { Modal,Rate } from 'antd';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ButtonComponent from '~/app/components/parts/button/button.component'
import { useCommentRedux } from '../../../redux/hook/useCommentReducer';
import { createComment } from '~/app/api/comment/comment.api';
import toast from 'react-hot-toast';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const AllReviewBook = () => {
    let { id } = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [commentText, setCommentText] = useState('')
    const [value, setValue] = useState(5);
    const { actions } = useCommentRedux()
    const userId: any = localStorage.getItem("userId")
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleTextAreaChange = (event: any) => {
        setCommentText(event.target.value)
    };
    const handelSubmitComment = () => {
        createComment({ comment: commentText, productId: id, star:value, userId }).then((res) => {
            if (res) {
                toast.success("comment success")
                setIsModalOpen(false);
                actions.getAllComments(id)
            }
        },
        (err) => {
            toast.error(err.response.data)
          })        
    } 
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='mt-16'>
            <div className='sm:flex justify-between items-center my-5 max-sm:text-center'>
                <div>
                    <h2 className='text-[16px] font-semibold text-gray-600 font-mono'>All Review Book</h2>
                </div>

                <div className='sm:flex items-center'>
                    <div className='px-8'>
                        <select name="" id="" className='w-[180px] font-serif rounded-sm h-[30px] text-center bg-[#EDEDED]'>
                            <option value="0">filter by: All</option>
                            <option value="1">5 Statr</option>
                            <option value="2">4 Statr</option>
                            <option value="3">3 Statr</option>
                            <option value="4">2 Statr</option>
                            <option value="5">1 Statr</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='text-[16px] font-semibold text-gray-600 mb-2 text-center'>
                            Share your thoughts
                        </h2>

                        <ButtonComponent handleColor className="w-[170px] font-semibold" title={"write your review"} onClick={showModal}/>
                        <div>
                            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={null}>
                                <div className='flex'>
                                    <div>
                                        <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1696389469/Duongkachmenh.jpg.jpg" alt="" className='w-[200px]' />
                                        <h2 className='text-[15px] font-semibold py-2'>True Colors</h2>
                                        <p className='text-[14px] text-gray-600 font-semibold'>by Kristin Hannah</p>
                                    </div>

                                    <div className='px-4 w-[650px]'>
                                        <h1 className='text-[22px] font-semibold'>Share your thoughts</h1>
                                        <p className='text-[14px] text-gray-600 font-semibold'>Tell readers what you thought by rating and reviewing this book.</p>
                                        <div className='flex justify-between items-center'>
                                            <div className='text-[16px] text-gray-600 font-semibold'>
                                                Rate it *
                                            </div>
                                            <div className='flex'>
                                            <span>
                                                <Rate tooltips={desc} onChange={setValue} value={value} />
                                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                                </span>
                                            </div>
                                        </div>
                                        <hr />

                                        <h2 className='text-[15px] my-4 font-semibold'>Add a review</h2>

                                        <textarea placeholder='comment here' className='w-full border border-gray-600 px-2' onChange={handleTextAreaChange}></textarea>

                                        <div className='flex items-center mt-3 float-right'>
                                            <div className=''>
                                                <ButtonComponent title={"Cancel"} onClick={handleCancel} className="w-[100px]" />
                                            </div>
                                            <div>
                                                <ButtonComponent type="submit" handleColor title={"Submit"} className="w-[100px]" onClick={handelSubmitComment} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>


                </div>
            </div>
            <hr className='my-5' />
        </div>

    )
}

export default AllReviewBook