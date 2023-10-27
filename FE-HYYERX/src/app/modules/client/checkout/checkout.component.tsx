import { useNavigate } from "react-router-dom"
import PaymentComponent from "./components/payment/payment.component"
import ProductOrderComponent from "./components/product-order/product-order.component"
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaShiping } from "../utils/validateForm"
import { useForm } from "react-hook-form"
import { useCartRedux } from "../redux/hook/useCartReducer"
import { createOrder } from "~/app/api/order/order.api"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Skeleton } from "antd"

const CheckoutComponent = () => {
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState<any>(0)
    const accessToken = localStorage.getItem("accessToken")
    const {data: {listBuyProduct}} = useCartRedux()
    const { handleSubmit, control, formState: { errors }, } = useForm({
        resolver: yupResolver(schemaShiping)
    })
    useEffect(() => {
        if (listBuyProduct) {
            const calculatedTotal = listBuyProduct.reduce((total: any, item: any) => total + item?.product?.newPrice * item?.quantity, 0);
            setTotalPrice(calculatedTotal);
        }
    }, [listBuyProduct]);

    const onSubmit = (data: any) => {
        const dataOrder = {
            ...data,
            total: totalPrice,
            productOrder: listBuyProduct
        }
        createOrder(dataOrder).then((res) => {
            if (res) {
                localStorage.removeItem("productSelectCart")
                toast.success("order success")
                navigate("/manage")
            }
        }, (err) => {
            toast.error(err?.response?.data)
        })
    }
    return (
        <div >
            {listBuyProduct.length == 0 || !accessToken ? <Skeleton /> : (
                 <form action="" className="max-sm:px-3 sm:flex sm:w-[1140px] m-auto justify-between mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:w-[50%]">
                    <PaymentComponent control={control} errors={errors} />
                </div>
                <div className="sm:w-[47%]">
                    <ProductOrderComponent />
                </div>
            </form>
            )}
           
        </div>
    )
}

export default CheckoutComponent