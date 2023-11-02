import crypto from "crypto"
export const checkPaymentStatus = async (vnpayres) => {
    let vnp_Params = vnpayres
    let secureHash = vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    if (vnp_Params['vnp_ResponseCode'] === "00") {

    }
}