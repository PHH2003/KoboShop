import { css } from '@emotion/react'
import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'
import StarComponent from '~/app/components/parts/star/star.component'

const ImginfoComponent = () => {
  return (
    <div className=''>
    <div className='p-6 flex'>
      <img className='w-[180px] h-[276px]' src="https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1" alt="" />
      <div className='px-7'>
        <h2 className='hover:text-[#BF0000]'>The Running Grave</h2>
        <span>by <a className='underline hover:text-[#BF0000]' href="#">Carla Kovach</a></span>
        <div className='flex py-4'>
        <StarComponent/>
        <StarComponent/>
        <StarComponent/>
        <StarComponent/>
        <StarComponent/>
        </div>
        <hr className='py-2'/>
        <div className=''>
        <p>
          Lauren returns home from celebrating her engagement with friends and stumbles as she gets out of the taxi. So what if her best friend Sienna didn’t show up? Lauren had a good night anyway. As she walks towards the small house she shares with her fiancé, Robbie, she’s surprised to see every window in total darkness. And when she calls his name, the house remains silent. Where is Robbie?...
        </p>
        <p className='text-right'>... <a className='underline hover:text-[#BF0000]' href="/detail/123">Read more</a></p>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default ImginfoComponent

const cssImginfo = css`
span a{
    text-decoration:underline;
    font-weight:600;
  }

`