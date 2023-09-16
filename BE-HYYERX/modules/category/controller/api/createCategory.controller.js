import catchAsync from '../../../../utils/catchAsync.js'
import { createCategorys } from '../../service/category.service.js'
import status from 'http-status'
const createCategory = catchAsync(async(req,res) => {
    const category = await createCategorys(req)
    return res.status(status.OK).json(category)
})

export default createCategory