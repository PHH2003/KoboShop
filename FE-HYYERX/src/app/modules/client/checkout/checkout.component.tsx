import { useNavigate } from "react-router-dom"
import PaymentComponent from "./components/payment/payment.component"
import ProductOrderComponent from "./components/product-order/product-order.component"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaShiping } from "../utils/validateForm"
import { useForm } from "react-hook-form"

const CheckoutComponent = () => {
    const navigate = useNavigate()
    const { handleSubmit, control, formState: { errors }, } = useForm({
        resolver: yupResolver(schemaShiping)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div >
            <form action="" className="max-sm:px-3 sm:flex sm:w-[1140px] m-auto justify-between mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:w-[50%]">
                    <PaymentComponent control={control} errors={errors} />
                </div>
                <div className="sm:w-[47%]">
                    <ProductOrderComponent />
                </div>
            </form>
        </div>
    )
}

export default CheckoutComponent