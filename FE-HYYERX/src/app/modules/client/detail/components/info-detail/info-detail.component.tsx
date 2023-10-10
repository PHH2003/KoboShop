import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useProductRedux } from "../../../redux/hook/useProductReducer"
import QuantityCompoennt from "~/app/components/parts/quantity/quantity.component"
import StarComponent from "~/app/components/parts/star/star.component"



const InfoDetail = () => {
    const [quantity, setQuantity] = useState(1)
    let { id } = useParams()
    const { data: { product }, actions } = useProductRedux()
    useEffect(() => {
        actions.getProductById(id)
    }, [id])
    console.log(product)
    return (
        <div css={cssDetail} className="flex justify-between">
            <div className="w-[246px]">
                <div>
                    <img src="" alt="" className="w-[246px] h-[376px]" />
                </div>

                <div className="flex items-center py-5 justify-center">
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    <StarComponent />
                    (5)
                </div>
                <div>
                    <p className="text-[0.9rem]">#28 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                    <p className="text-[0.9rem]">#34 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                    <p className="text-[0.9rem]">#74 in <a href="#">Fiction & Literature</a>, <a href="#">Thrillers</a></p>
                </div>
            </div>
            <div className="px-6 w-[633px]">
                <h2>{product?.name}</h2>
                <span className="title">{product?.company}</span>
                <p className="mt-4">by <a href="#">{product?.author}</a></p>

                <div className="flex mt-6">
                    <div className="title-price border border-[#bbb]">
                        <span>Audiobook</span>
                        <div> ${product?.cost}</div>
                    </div>
                    <div className="px-5">
                        <div className="title-price border border-red-600 bg-red-200">
                            <span>eBook</span>
                            <div> ${product?.newPrice}</div>
                        </div>
                    </div>

                </div>
                <p className="my-4">Free with Trial</p>
                <div className="py-3 flex items-center">
                    <QuantityCompoennt
                        listQuantityRemain={product}
                        setQuantity={setQuantity}
                        quantity={quantity}
                    />
                    <p className="text-[16px] px-3 font-medium">available quantity:{product?.quantity}</p>
                </div>
                <hr className="my-4"/>

                <h2 className="title-name">Synopsis</h2>
                <span>
                    {product?.description}
                </span>
            </div>
        </div>
    )
}

export default InfoDetail


const cssDetail = css`
a{
    text-decoration:underline;
    font-weight:600;
}
.title-name{
    font-size: 1rem;
}
h2{
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
}
.title{
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
    font-size: 1.2rem;
    color: #595959;
    display: inline-block;
}
.title-price{
    text-align:center;
    width: 120px;
    padding: 0.3rem 0.3rem 0.5rem 0.5rem;
    // border: 1px solid #bbb;
}
`