import PaymentComponent from "./components/payment/payment.component"
import ProductOrderComponent from "./components/product-order/product-order.component"


const CheckoutComponent = () => {
    return (
        <div className="flex w-[1140px] m-auto justify-between mt-6">
            <div className="w-[47%]">
                <PaymentComponent />
            </div>
            <div className="w-[47%]">
                <ProductOrderComponent />
            </div>
        </div>
    )
}

export default CheckoutComponent