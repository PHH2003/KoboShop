import { css } from "@emotion/react"
import ButtonComponent from "~/app/components/parts/button/button.component"
const BuyDetail = () => {
    return (
        <div className="w-[250px]" css={cssBuy}>
            <h2 className="text-[1.3rem]">Buy the eBook</h2>
            <div className="flex justify-between py-2">
                <p>List Price</p>
                <p><del>$17.23 </del>USD</p>
            </div>

            <div className="flex justify-between ">
                <p className="font-semibold">yours Price</p>
                <b>$14.19 USD</b>
            </div>

            <div className="">
                <div className="mt-2">
                    <ButtonComponent handleColor title={"Add to cart"} className="w-[200px]" />
                </div>

                <div className="py-3">
                    <ButtonComponent title={"Buy Now"} className="w-[200px]" />
                </div>
                <ButtonComponent title={"Add to Wishlist"} className="w-[200px]" />
            </div>
        </div>
    )
}

export default BuyDetail

const cssBuy = css`
box-shadow: 0 0 7px #e6e6e6;
padding: 2rem 1.5rem;
border: 1px solid #e6e6e6;
background-color: #fff;
margin: 3rem 0;
`