import { Modal } from 'antd';
import React, { useState } from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'
import StarComponent from '~/app/components/parts/star/star.component';

const AllReviewBook = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='mt-16'>
            <div className='flex justify-between items-center my-5'>
                <div>
                    <h2 className='text-[16px] font-semibold text-gray-600 font-mono'>All Review Book</h2>
                </div>

                <div className='flex items-center'>
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
                            {/* <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button> */}
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
                                                <StarComponent />
                                                <StarComponent />
                                                <StarComponent />
                                                <StarComponent />
                                                <StarComponent />
                                            </div>
                                        </div>
                                        <hr />

                                        <h2 className='text-[15px] my-4 font-semibold'>Add a review</h2>

                                        <textarea placeholder='comment here' className='w-full border border-gray-600 px-2'></textarea>

                                        <div className='flex items-center mt-3 float-right'>
                                            <div className=''>
                                                <ButtonComponent title={"Cancal"} className="w-[100px]" />
                                            </div>
                                            <div>
                                                <ButtonComponent handleColor title={"Submit"} className="w-[100px]" />
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