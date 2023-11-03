import catchAsync from "../../../../utils/catchAsync.js";


const filterDataOrder = catchAsync(async(req,res)=>{
    const dataRes = await filterDataOrders(req.query)
    return res.status(status.OK).json(dataRes)
})
export default filterDataOrder