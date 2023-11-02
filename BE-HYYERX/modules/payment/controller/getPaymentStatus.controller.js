import catchAsync from "../../../utils/catchAsync";
import { checkPaymentStatus } from "../service/payment.service";


const getPaymentStatus = catchAsync(async(req, res)=> {
    const dataResult = await checkPaymentStatus(req.body)
    let messageData = ""
    if(dataResult.success){
        messageData = "You have successfully paid for your order"
    }
    else {
        messageData = "Your payment has failed"
    }
    res.send(`
        <script>
        toast.success('${messageData}')
        </script>
    `)
})

export default getPaymentStatus