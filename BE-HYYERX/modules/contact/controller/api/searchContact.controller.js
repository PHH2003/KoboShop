
import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js';
import { searchContact } from '../../service/contact.service.js';

const searchContacts = catchAsync(async (req, res) => {
    const search = await searchContact(req)
    if (search.length === 0) {
        return res.status(status.NOT_FOUND).json("Không có kết quả nào phù hợp với từ khóa tìm kiếm")
    }
    else return res.status(status.OK).json(search);
})
export default searchContacts