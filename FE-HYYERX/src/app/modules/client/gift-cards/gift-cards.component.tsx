import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'

const GiftCardComponent = () => {
  return (
    <div className='w-[1140px]  m-auto'>
        <div className='flex'>
            <img src="https://cdn.kobo.com/merch-assets/magento/LP-GiftCard-NewLogo/4246_Gift_Card_Landing_header.png" alt="" className='w-[486px] h-[352px]'/>
            <div className='py-5 px-8'>
                <h2 className='py-6 font-semibold text-4xl font-serif '>Give the gift of reading</h2>
                <p className='font-serif text-gray-500 text-xl'>Make a reader's day with the perfect present. Send them an eGift for the amount of your choice, or buy a Digital Card at a retailer near you for a gift amount or an audiobook subscription.</p>
                <div className='py-7'>
                    <ButtonComponent title={'Send an eGift'} handleColor className="w-[135px] h-[40px] hover:bg-black"/>
                    <ButtonComponent title={'Redeem Kobo Card'}  className="ml-7 w-[150px] h-[40px] hover:bg-black"/>
                </div>

                <p>Have a Chapters or Indigo Gift Card?</p>
                <a className='text-red-700' href="#">Having trouble? Learn how to redeem other types of cards here</a>
            </div>
            
        </div>
        <hr className='mt-14'/>
        <div className='flex px-4 pt-7 pb-7 items-center'>
            <div className='flex w-[420px] items-center'>
                <img className='w-[40px] h-[40px]' src="https://cdn.kobo.com/merch-assets/magento/giftcard/assets/help.png" alt="" />
                <h3 className='ml-11 text-[#0065BD] font-semibold text-2xl'>Redeeming Kobo Gift Cards</h3>
            </div>

            <div className='w-[70%]'>
                <p className='ml-20 text-[#0065BD] font-serif'>Redeem your Kobo Gift Card during checkout by applying its number to the Add gift card field. Any remaining balance will be added to your account as a store credit and applied to your next purchase. <a href="#" className='underline '> Learn more about redeeming Kobo Gift Cards</a></p>
            </div>


        </div>
        <hr />

        <div className='mt-20'>
            <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1697284361/Screenshot_2023-10-14_185226_w2wb9k.png" alt="" />
        </div>
    </div>
  )
}

export default GiftCardComponent