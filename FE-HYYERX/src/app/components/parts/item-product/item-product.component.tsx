import { css } from '@emotion/react'
import StarComponent from '../star/star.component'
import ButtonComponent from '../button/button.component'

const Itemproduct = () => {
  return (
    <div css={cssItemProduct} className='w-[1140px] m-auto flex justify-between pt-8'>
        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

        <div>
            <img src="http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg" className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
                <StarComponent/>
            </p>
            <span>$3.39</span>
            <div className='mt-4'>
                <ButtonComponent/>
            </div>
        </div>

    </div>
  )
}

export default Itemproduct

const cssItemProduct = css`
h2{
    color: #000;
    padding-top:10px;
    font-weight: 600;
    font-size: 0.8rem;
  }
  span{
    color: #000;
    padding-top:10px;
    font-weight: 600;
    font-size: 0.8rem;
  }
`