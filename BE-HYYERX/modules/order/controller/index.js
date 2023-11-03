import addOrder from "./api/addOrder.controller.js"
import updateOrder from "./api/updateOrder.controller.js"
import getAllOrder from "./api/getAllOrder.controller.js"
import deleteOrder from "./api/deleteOrder.controller.js"
import filterDataOrder from "./api/fltterOrder.controller.js"
const orderController ={
  addOrder,
  updateOrder,
  getAllOrder,
  deleteOrder,
  filterDataOrder
}
export default orderController