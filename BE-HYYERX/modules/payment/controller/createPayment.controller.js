import dateFormat from "dateformat"
import config from "../../../config/configVnpay.js"
import crypto from "crypto"
import catchAsync from "../../../utils/catchAsync.js"

var tmnCode = config.VnPay.tmnCode
var secretKey = config.VnPay.secret
var vnpUrl = config.VnPay.url


const createPayment = catchAsync(async (req, res) => {
    var ipAddr = req.headers['x-forwarded-for'] || '127.0.0.1'
    var returnUrl = config.get('vnp_ReturnUrl');
    var date = new Date();
    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    var amount = req.body.amount;
    var bankCode = req.body.bankCode || 'NCB';

    var orderInfo = req.body.orderDescription || 'Thanh toán đơn hàng';
    var orderType = req.body.orderType;
    var locale = req.body.language || 'vn';
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;

    res.redirect(vnpUrl)
})

export default createPayment