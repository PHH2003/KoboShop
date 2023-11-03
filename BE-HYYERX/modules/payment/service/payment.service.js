import crypto from "crypto"
export const checkPaymentStatus = async (vnpayres) => {
    let vnp_Params = vnpayres
    let secureHash = vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    if (vnp_Params['vnp_ResponseCode'] === "00") {
        const amount = vnp_Params['vnp_Amount']
        const txnRef = vnp_Params['vnp_TxnRef']
        const payDate = vnp_Params['vnp_PayDate']
        const bankCode = vnp_Params["vnp_BankCode"]
        let success = false, message = "thanh toán feild"
        if (vnp_Params["vnp_ResponseCode"] == "00") {
            success = true
            message = 'thanh toán thành công'
        }
        return {
            success: true,
            message: "thành công"
        }
    }
    else {
        return {
            success: false,
            message: "thất bại"
        }
    }
}