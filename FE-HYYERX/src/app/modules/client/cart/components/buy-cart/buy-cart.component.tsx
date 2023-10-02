import { css } from "@emotion/react"
import ButtonComponent from "~/app/components/parts/button/button.component"
const BuyCart = () => {
    return (
        <div className="w-[25%] border p-4 h-[150px] mt-6" css={cssBuy}>
            <div className="flex justify-between py-2 text-[#595959]">
                <p className="font-mono">Total amount:</p>
                <span className="font-mono">$14,9</span>
            </div>
                <div className="py-6">
                    <ButtonComponent title={"Payment"} className="w-[250px] hover:bg-[#BF0000]" />
                </div>
        </div>
    )
}

export default BuyCart

const cssBuy = css`


`