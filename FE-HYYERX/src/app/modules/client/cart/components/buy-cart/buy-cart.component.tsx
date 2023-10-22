import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import ButtonComponent from "~/app/components/parts/button/button.component"
import { useCartRedux } from "../../../redux/hook/useCartReducer"
import { useEffect } from "react"
const BuyCart = () => {
    const   {data: {carts}, actions} = useCartRedux()
    useEffect(()=> {
        actions.getAllCarts()
    },[])
    const total = carts.reduce((accumulator: any, cartItem: any)=> {
        const productPrice = cartItem.product.newPrice;
        const quantity = cartItem.quantity;
        const itemTotal = productPrice * quantity
        return accumulator + itemTotal
    }, 0)
    return (
        <div className="w-[25%] border p-4 h-[150px] mt-6" css={cssBuy}>
            <div className="flex justify-between py-2 text-[#595959]">
                <p className="font-mono">Total amount:</p>
                <span className="font-mono">${total}</span>
            </div>
                <div className="py-6">
                    <Link to={'/checkout'}>
                        <ButtonComponent title={"Payment"} handleColor className="w-[250px] hover:bg-[#595959]" />
                    </Link>
                </div>
        </div>
    )
}

export default BuyCart

const cssBuy = css`


`